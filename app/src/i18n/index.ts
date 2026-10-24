import pt, { type Dict, type ServiceKey } from './pt';
import en from './en';
import zh from './zh';

export type Lang = 'pt' | 'en' | 'zh';
export const LANGS: Lang[] = ['pt', 'en', 'zh'];
export const DICTS: Record<Lang, Dict> = { pt, en, zh };

export const WHATSAPP = '5511949736011';
export const WHATSAPP_DISPLAY = '(11) 94973-6011';
export const EMAIL = 'contato@brasillvisa.com.br';
export const ADDRESS_QUERY = 'Av. Marquês de São Vicente, 230, Barra Funda, São Paulo SP, 01139-000';
export const SOCIAL = {
  instagram: 'https://www.instagram.com/brasillvisa/',
  facebook: 'https://www.facebook.com/Brasillvisa',
};

/** Ordem de prioridade das landing pages (visto de investidor é o serviço principal). */
export const SERVICES: ServiceKey[] = ['investidor', 'imobiliario', 'reuniao', 'chineses', 'crnm', 'naturalizacao', 'vistoEua'];

export type PageKey = 'home' | 'quemSomos' | 'obrigado' | 'privacidade' | ServiceKey;

export const SLUGS: Record<PageKey, string> = {
  home: '',
  quemSomos: 'quem-somos',
  obrigado: 'obrigado',
  privacidade: 'privacidade',
  investidor: 'visto-de-investidor',
  imobiliario: 'visto-de-investimento-imobiliario',
  reuniao: 'visto-de-reuniao-familiar',
  chineses: 'regularizacao-chineses',
  crnm: 'assessoria-em-rne',
  naturalizacao: 'naturalizacao-brasileira',
  vistoEua: 'assessoria-em-visto',
};

/** Caminho localizado: português na raiz, os demais em /en e /zh. */
export function href(lang: Lang, page: PageKey): string {
  const slug = SLUGS[page];
  const prefix = lang === 'pt' ? '' : `/${lang}`;
  // Barra final igual ao formato de saída da build (pasta/index.html), para canonical e links baterem.
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}

/** Nome da página para breadcrumbs e menus. */
export function pageLabel(lang: Lang, page: PageKey): string {
  const t = DICTS[lang];
  if (page === 'home') return t.nav.home;
  if (page === 'quemSomos') return t.nav.quemSomos;
  if (page === 'privacidade') return t.footer.privacy;
  if (page === 'obrigado') return t.obrigado.title;
  return t.services[page].label;
}

export function waLink(lang: Lang, key: keyof Dict['wa']): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(DICTS[lang].wa[key])}`;
}

/** Usado por getStaticPaths das páginas fixas: pt na raiz, en e zh com prefixo. */
export function langPaths() {
  return LANGS.map((l) => ({ params: { lang: l === 'pt' ? undefined : l }, props: { lang: l } }));
}
