// Elemento 3D do herói (Fase 6): a carteira de residência e o passaporte da ilustração SVG
// viram objetos com espessura, inclinam com o mouse e ganham um brilho holográfico de
// documento de segurança. As faces usam a própria ilustração SVG como textura.
// Só roda em telas grandes, com WebGL e sem preferência por movimento reduzido;
// nos demais casos o SVG original continua sendo o herói.
import * as THREE from 'three';

type Piece = { mesh: THREE.Group; holo: THREE.ShaderMaterial; base: THREE.Vector3; rotZ: number; depthFactor: number };

const VIEW_W = 640;
const VIEW_H = 470;
const CAM_Z = 1400;
/** Margem extra (em unidades do viewBox) em volta da área do SVG, para as peças não serem cortadas ao inclinar. */
const PAD = 90;

/** Converte coordenadas do viewBox do SVG para o mundo 3D (origem no centro, y para cima). */
const toWorld = (x: number, y: number) => new THREE.Vector3(x - VIEW_W / 2, VIEW_H / 2 - y, 0);

function roundedRect(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

/** UV de 0 a 1 pela posição, para a textura cobrir a face inteira da forma arredondada. */
function planarUV(geo: THREE.BufferGeometry, w: number, h: number) {
  const pos = geo.attributes.position;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = (pos.getX(i) + w / 2) / w;
    uv[i * 2 + 1] = (pos.getY(i) + h / 2) / h;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

/** Renderiza um grupo da ilustração SVG (sem transformações) como textura. */
async function textureFrom(svg: SVGSVGElement, selector: string, w: number, h: number) {
  const group = svg.querySelector(selector);
  const defs = svg.querySelector('defs');
  if (!group) throw new Error(selector);
  const scale = 2.5;
  const markup =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w * scale}" height="${h * scale}">` +
    (defs?.outerHTML ?? '') +
    group.innerHTML +
    '</svg>';
  const img = new Image();
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(markup);
  await img.decode();
  const canvas = document.createElement('canvas');
  canvas.width = w * scale;
  canvas.height = h * scale;
  canvas.getContext('2d')!.drawImage(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

const holoVertex = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
// Faixa diagonal iridescente que corre pela face conforme a inclinação, como o holograma de um documento.
const holoFragment = /* glsl */ `
  uniform float uShift;
  uniform float uStrength;
  varying vec2 vUv;
  void main() {
    float d = (vUv.x * 0.8 + vUv.y * 0.6) - uShift;
    float band = exp(-pow(d * 7.0, 2.0));
    vec3 tint = 0.5 + 0.5 * cos(6.2831 * (vUv.x * 0.6 + uShift + vec3(0.0, 0.33, 0.67)));
    gl_FragColor = vec4(mix(vec3(1.0), tint, 0.55) * band * uStrength, 1.0);
  }
`;

function makePiece(tex: THREE.Texture, w: number, h: number, r: number, depth: number, sideColor: number, holoStrength: number) {
  const geo = new THREE.ExtrudeGeometry(roundedRect(w, h, r), {
    depth,
    bevelEnabled: true,
    bevelThickness: 1.2,
    bevelSize: 1.2,
    bevelSegments: 2,
    curveSegments: 10,
  });
  planarUV(geo, w, h);
  geo.translate(0, 0, -depth);
  const face = new THREE.MeshBasicMaterial({ map: tex });
  const side = new THREE.MeshLambertMaterial({ color: sideColor });
  const body = new THREE.Mesh(geo, [face, side]);

  const holoGeo = new THREE.ShapeGeometry(roundedRect(w, h, r), 10);
  planarUV(holoGeo, w, h);
  const holo = new THREE.ShaderMaterial({
    vertexShader: holoVertex,
    fragmentShader: holoFragment,
    uniforms: { uShift: { value: 0 }, uStrength: { value: holoStrength } },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const holoMesh = new THREE.Mesh(holoGeo, holo);
  holoMesh.position.z = 1.4;

  const group = new THREE.Group();
  group.add(body, holoMesh);
  return { group, holo };
}

function webglOk() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

let teardown: (() => void) | null = null;

export async function mountHero3D() {
  teardown?.();
  const stage = document.querySelector<HTMLElement>('.hero-stage');
  const svg = stage?.querySelector<SVGSVGElement>('svg.hero-doc');
  if (!stage || !svg) return;
  if (!window.matchMedia('(min-width: 640px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!webglOk()) return;

  const [cardTex, passTex] = await Promise.all([
    textureFrom(svg, '.hd-card', 520, 320),
    textureFrom(svg, '.hd-passport', 230, 320),
  ]);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.className = 'hero-3d';
  canvas.setAttribute('aria-hidden', 'true');
  stage.prepend(canvas);

  const scene = new THREE.Scene();
  // A câmera cobre a área do SVG mais a margem, mantendo 1 unidade do mundo = 1 unidade do viewBox.
  const fov = (2 * Math.atan((VIEW_H / 2 + PAD) / CAM_Z) * 180) / Math.PI;
  const camera = new THREE.PerspectiveCamera(fov, (VIEW_W + PAD * 2) / (VIEW_H + PAD * 2), 10, 4000);
  camera.position.z = CAM_Z;
  scene.add(new THREE.AmbientLight(0xffffff, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(-300, 500, 700);
  scene.add(key);

  // Posições e rotações iguais às da ilustração SVG (centros calculados a partir dos transforms).
  const passport = makePiece(passTex, 230, 320, 16, 4, 0x33373d, 0.12);
  const card = makePiece(cardTex, 520, 320, 22, 3, 0xdfe2f0, 0.16);
  const pieces: Piece[] = [
    { mesh: passport.group, holo: passport.holo, base: toWorld(483.6, 182.4).setZ(-40), rotZ: THREE.MathUtils.degToRad(-8), depthFactor: 0.55 },
    { mesh: card.group, holo: card.holo, base: toWorld(278, 266.2), rotZ: THREE.MathUtils.degToRad(3), depthFactor: 1 },
  ];
  pieces.forEach((p) => {
    p.mesh.position.copy(p.base);
    p.mesh.rotation.z = p.rotZ;
    scene.add(p.mesh);
  });

  function resize() {
    const r = svg!.getBoundingClientRect();
    const k = r.width / VIEW_W;
    const w = r.width + PAD * 2 * k;
    const h = r.height + PAD * 2 * k;
    renderer.setSize(w, h, false);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    canvas.style.left = `${-PAD * k}px`;
    canvas.style.top = `${-PAD * k}px`;
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(svg);

  // Inclinação pelo ponteiro sobre o herói inteiro.
  const hero = stage.closest('section') ?? stage;
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  const onMove = (e: PointerEvent) => {
    const r = hero.getBoundingClientRect();
    target.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    target.y = ((e.clientY - r.top) / r.height) * 2 - 1;
  };
  const onLeave = () => {
    target.x = 0;
    target.y = 0;
  };
  hero.addEventListener('pointermove', onMove);
  hero.addEventListener('pointerleave', onLeave);

  let visible = true;
  const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
  io.observe(stage);

  const start = performance.now();
  let raf = 0;
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

  function frame(now: number) {
    raf = requestAnimationFrame(frame);
    if (!visible) return;
    const t = (now - start) / 1000;
    current.x += (target.x - current.x) * 0.06;
    current.y += (target.y - current.y) * 0.06;
    pieces.forEach((p, i) => {
      const enter = easeOut(Math.min(1, Math.max(0, (t - i * 0.12) / 1.1)));
      const float = Math.sin(t * 0.9 + i * 1.3) * 4;
      p.mesh.position.set(p.base.x, p.base.y - (1 - enter) * 90 + float * enter, p.base.z);
      p.mesh.rotation.set(
        -current.y * 0.22 * p.depthFactor + Math.sin(t * 0.6 + i) * 0.02,
        current.x * 0.28 * p.depthFactor + Math.cos(t * 0.5 + i) * 0.025,
        p.rotZ + (1 - enter) * (i === 0 ? -0.25 : 0.12),
      );
      p.mesh.scale.setScalar(0.92 + 0.08 * enter);
      p.holo.uniforms.uShift.value = 0.75 + current.x * 0.45 + current.y * 0.25 + Math.sin(t * 0.4) * 0.12;
    });
    renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(frame);
  stage.classList.add('is-3d');

  teardown = () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    hero.removeEventListener('pointermove', onMove);
    hero.removeEventListener('pointerleave', onLeave);
    scene.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        o.geometry.dispose();
        (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
      }
    });
    cardTex.dispose();
    passTex.dispose();
    renderer.dispose();
    canvas.remove();
    stage.classList.remove('is-3d');
    teardown = null;
  };
}

export function unmountHero3D() {
  teardown?.();
}
