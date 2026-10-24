// Efeitos de entrada e de rolagem do site (GSAP + ScrollTrigger + SplitText).
// Tudo é desligado com prefers-reduced-motion e refeito a cada navegação do ClientRouter.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

let ctx: gsap.Context | null = null;
let splits: SplitText[] = [];

// Blocos que entram em sequência ao aparecer na tela. A primeira seção (herói) fica de fora:
// ela tem a própria entrada.
// Contêineres vêm primeiro: quando um contêiner anima, o que está dentro dele não anima de novo.
const REVEAL = ['aside', 'form', 'table', 'iframe', '[data-reveal]', 'dl > div', 'ul > li', 'ol > li', 'p.measure', '.btn'];

function lines(el: Element, vars: gsap.TweenVars) {
  // Chinês não tem espaços: animar por linha funciona nos três idiomas.
  const split = SplitText.create(el, {
    type: 'lines',
    mask: 'lines',
    autoSplit: true,
    onSplit: (self) => gsap.from(self.lines, { yPercent: 105, duration: 0.85, stagger: 0.08, ease: 'power3.out', ...vars }),
  });
  splits.push(split);
}

export function startMotion() {
  stopMotion();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const main = document.querySelector('main');
  if (!main) return;
  const sections = [...main.querySelectorAll(':scope > section, :scope > div, :scope > div > section')];
  const hero = main.querySelector(':scope > section');

  ctx = gsap.context(() => {
    // Entrada do título principal (home e páginas internas).
    const title = hero?.querySelector('h1');
    if (title) lines(title, { delay: 0.1 });
    const heroBits = hero ? [...hero.querySelectorAll('nav, h1 ~ p, h1 ~ div, :scope > div > div > p')].filter((e) => !e.closest('.hero-stage')) : [];
    if (heroBits.length) gsap.from(heroBits, { y: 18, opacity: 0, duration: 0.7, stagger: 0.07, delay: 0.35, ease: 'power2.out' });

    // Títulos de seção: linhas sobem quando a seção entra.
    main.querySelectorAll('h2:not(.sr-only)').forEach((h) => {
      if (hero?.contains(h)) return;
      const split = SplitText.create(h, {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, {
            yPercent: 105,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: h, start: 'top 88%', once: true },
          }),
      });
      splits.push(split);
    });

    // Blocos em sequência.
    const seen = new Set<Element>();
    const items: Element[] = [];
    sections.forEach((sec) => {
      if (sec === hero) return;
      REVEAL.forEach((sel) =>
        sec.querySelectorAll(sel).forEach((el) => {
          if (seen.has(el) || [...seen].some((s) => s.contains(el) || el.contains(s))) return;
          if (el.closest('[data-menu], .sr-only')) return;
          seen.add(el);
          items.push(el);
        }),
      );
    });
    gsap.set(items, { opacity: 0, y: 28 });
    ScrollTrigger.batch(items, {
      start: 'top 90%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.75, stagger: 0.07, ease: 'power3.out', overwrite: true }),
    });

    // Linhas que ligam as etapas de "Como funciona" são desenhadas da esquerda para a direita.
    main.querySelectorAll('ol li span.h-px').forEach((line) => {
      gsap.from(line, { scaleX: 0, transformOrigin: 'left center', duration: 0.9, ease: 'power2.inOut', scrollTrigger: { trigger: line, start: 'top 85%', once: true } });
    });

    // Parallax: o guilhoché das seções azul noite anda mais devagar que a página.
    main.querySelectorAll('.guilloche-noite').forEach((sec) => {
      gsap.fromTo(
        sec,
        { backgroundPosition: '0px 0px, 0 0' },
        { backgroundPosition: '0px -140px, 0 0', ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true } },
      );
    });

    // A ficha do herói sobe um pouco mais devagar que o texto ao rolar.
    const stage = main.querySelector('.hero-stage');
    if (stage) {
      gsap.to(stage, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    }
  }, main);

  ScrollTrigger.refresh();
}

export function stopMotion() {
  splits.forEach((s) => s.revert());
  splits = [];
  ctx?.revert();
  ctx = null;
}
