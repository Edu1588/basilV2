"""Leva as fotos geradas no Gemini (imagens-gemini/) para o site (app/src/assets/fotos/).

Nomes esperados em imagens-gemini/ (qualquer extensão de imagem):
  investidor, imobiliario, reuniao, chineses, crnm, naturalizacao, visto-americano, escritorio
Cada foto é reduzida para no máximo 1600px de largura e salva em JPEG; o Astro gera as versões WebP na build.
Uso: python -I tools/fotos.py
"""
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'imagens-gemini'
DST = ROOT / 'app' / 'src' / 'assets' / 'fotos'
# nome do arquivo salvo → nome usado no código (chave de t.fotos)
NOMES = {
    'investidor': 'investidor',
    'imobiliario': 'imobiliario',
    'reuniao': 'reuniao',
    'chineses': 'chineses',
    'crnm': 'crnm',
    'naturalizacao': 'naturalizacao',
    'visto-americano': 'vistoEua',
    'escritorio': 'escritorio',
}


def main() -> int:
    DST.mkdir(parents=True, exist_ok=True)
    feitos, faltam = [], []
    for arquivo, chave in NOMES.items():
        achados = [p for p in SRC.glob(f'{arquivo}.*') if p.suffix.lower() in {'.png', '.jpg', '.jpeg', '.webp'}]
        if not achados:
            faltam.append(arquivo)
            continue
        im = Image.open(achados[0]).convert('RGB')
        if im.width > 1600:
            im = im.resize((1600, round(im.height * 1600 / im.width)), Image.LANCZOS)
        im.save(DST / f'{chave}.jpg', quality=88, optimize=True, progressive=True)
        feitos.append(f'{arquivo} ({im.width}x{im.height})')
    print('Copiadas:', ', '.join(feitos) or 'nenhuma')
    if faltam:
        print('Faltam em imagens-gemini/:', ', '.join(faltam))
    return 0


if __name__ == '__main__':
    sys.exit(main())
