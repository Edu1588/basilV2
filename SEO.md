# SEO e segurança

## SEO
- sitemap.xml (30 URLs, hreflang pt-BR, en, zh-CN, x-default), robots.txt, llms.txt.
- Títulos até 60 e descriptions até 160 caracteres em PT e EN, todos únicos.
- Canonical, Open Graph (30 imagens) e Twitter card em todas as páginas.
- Schema ProfessionalService (São Paulo, CNPJ, fundadora), Service e FAQPage em cada landing page, BreadcrumbList.
- Auditoria por script sobre `app/dist`: 34 páginas, nenhum item crítico, nenhum travessão, nenhuma menção à Migrafácil.

## Segurança
- `npm audit`: 0 vulnerabilidades.
- CSP com hashes (Astro `security.csp`), sem fontes `data:`; testada na build de produção sem violações.
- `.htaccess` (HTTPS, cabeçalhos, 404) e `_headers` (Netlify/Cloudflare).
- Formulário sem upload de documentos, com honeypot e consentimento; sem endpoint configurado abre o WhatsApp.
- Compliance de anúncio (PESQUISA.md, seção 6): sem promessa de resultado, sem "advogados" como produto, aviso fixo de empresa privada sem vínculo com órgãos públicos.
