// sitemap.xml com as versões de cada página em português, inglês e chinês (hreflang).
import type { APIRoute } from 'astro';
import { LANGS, SLUGS, href, type PageKey } from '../i18n';

const HREFLANG = { pt: 'pt-BR', en: 'en', zh: 'zh-CN' } as const;
const PAGES = (Object.keys(SLUGS) as PageKey[]).filter((p) => p !== 'obrigado');
const PRIORITY: Partial<Record<PageKey, string>> = { home: '0.9', investidor: '1.0', imobiliario: '0.9', reuniao: '0.9', chineses: '0.9', privacidade: '0.3' };

export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const urls = PAGES.flatMap((page) =>
    LANGS.map((lang) => {
      const alternates = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${abs(href(l, page))}"/>`).join('\n');
      return `  <url>\n    <loc>${abs(href(lang, page))}</loc>\n${alternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(href('pt', page))}"/>\n    <priority>${PRIORITY[page] ?? '0.6'}</priority>\n  </url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
