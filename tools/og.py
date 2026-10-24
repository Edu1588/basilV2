"""Gera as imagens Open Graph (1200x630) de cada página nos três idiomas.

Lê o título (h1) de cada página na build (app/dist) e grava em app/public/og/<idioma>/<pagina>.png.
Uso: python -I tools/og.py   (rodar depois de `npm run build` dentro de app/)
"""
import html
import io
import math
import re
import sys
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / 'app'
DIST = APP / 'dist'
OUT = APP / 'public' / 'og'

PAGES = {
    'home': '', 'quemSomos': 'quem-somos', 'privacidade': 'privacidade',
    'investidor': 'visto-de-investidor', 'imobiliario': 'visto-de-investimento-imobiliario',
    'reuniao': 'visto-de-reuniao-familiar', 'chineses': 'regularizacao-chineses', 'crnm': 'assessoria-em-rne',
    'naturalizacao': 'naturalizacao-brasileira', 'vistoEua': 'assessoria-em-visto',
}
TAGLINE = {
    'pt': 'Consultoria em imigração · São Paulo',
    'en': 'Immigration consulting · São Paulo, Brazil',
    'zh': '巴西移民咨询 · 圣保罗',
}
NOITE = (36, 39, 44)
CARMIM = (203, 52, 56)
W, H = 1200, 630


def latin_font(size: int) -> ImageFont.FreeTypeFont:
    src = APP / 'node_modules/@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2'
    f = TTFont(src)
    f.flavor = None
    bold = instancer.instantiateVariableFont(f, {'wght': 700})
    buf = io.BytesIO()
    bold.save(buf)
    buf.seek(0)
    return ImageFont.truetype(buf, size)


def zh_font(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype('C:/Windows/Fonts/msyhbd.ttc', size)


def background() -> Image.Image:
    img = Image.new('RGB', (W, H), NOITE)
    d = ImageDraw.Draw(img, 'RGBA')
    # Brilho radial suave à direita.
    glow = Image.new('L', (W, H), 0)
    gd = ImageDraw.Draw(glow)
    for r in range(520, 0, -8):
        gd.ellipse((900 - r, 300 - r, 900 + r, 300 + r), fill=int(70 * (1 - r / 520)))
    img.paste((120, 40, 44), mask=glow)
    # Linhas de guilhoché.
    for k in range(14):
        pts = []
        for x in range(0, W + 1, 6):
            y = 470 + (80 - k * 5) * math.sin(x / W * math.pi * 3 + k * 0.45) + 18 * math.sin(x / W * math.pi * 11 + k)
            pts.append((x, y))
        d.line(pts, fill=(255, 255, 255, 22), width=1)
    return img


def wrap(draw: ImageDraw.ImageDraw, text: str, font, max_w: int, cjk: bool) -> list[str]:
    tokens = list(text) if cjk else text.split(' ')
    sep = '' if cjk else ' '
    lines, cur = [], ''
    for tok in tokens:
        trial = (cur + sep + tok) if cur else tok
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            lines.append(cur)
            cur = tok
    if cur:
        lines.append(cur)
    return lines


def render(lang: str, title: str, logo: Image.Image, fonts: dict) -> Image.Image:
    img = background()
    d = ImageDraw.Draw(img, 'RGBA')
    img.paste(logo, (72, 64), logo)
    cjk = lang == 'zh'
    size = 66
    while True:
        font = fonts['zh'](size) if cjk else fonts['latin'](size)
        lines = wrap(d, title, font, 980, cjk)
        if len(lines) <= 3 or size <= 44:
            break
        size -= 4
    y = 230 if len(lines) < 3 else 200
    for line in lines:
        d.text((72, y), line, font=font, fill=(255, 255, 255))
        y += int(size * 1.15)
    small = fonts['zh'](28) if cjk else fonts['latin'](28)
    d.text((72, H - 92), TAGLINE[lang], font=small, fill=(255, 255, 255, 190))
    # Check carmim do logo no canto.
    d.line([(1030, 520), (1062, 556), (1130, 470)], fill=CARMIM, width=16, joint='curve')
    return img


def h1_of(path: Path) -> str:
    s = path.read_text(encoding='utf-8')
    m = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    text = re.sub(r'<[^>]+>', '', m.group(1)) if m else ''
    return html.unescape(re.sub(r'\s+', ' ', text)).strip()


def main() -> int:
    if not DIST.exists():
        print('Rode npm run build em app/ antes.', file=sys.stderr)
        return 1
    logo = Image.open(APP / 'public/logo-escuro.webp').convert('RGBA')
    logo.thumbnail((300, 70))
    fonts = {'latin': latin_font, 'zh': zh_font}
    count = 0
    for lang in ('pt', 'en', 'zh'):
        (OUT / lang).mkdir(parents=True, exist_ok=True)
        for key, slug in PAGES.items():
            parts = ([] if lang == 'pt' else [lang]) + ([slug] if slug else [])
            page = DIST.joinpath(*parts, 'index.html')
            title = h1_of(page)
            render(lang, title, logo, fonts).save(OUT / lang / f'{key}.png', optimize=True)
            count += 1
    print(f'{count} imagens em {OUT}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
