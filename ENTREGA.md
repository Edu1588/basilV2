# ENTREGA: Landing pages BrasilVisa

## O que está pronto
- Site estático em `app/` (Astro 7, React, Tailwind CSS v4, Lenis, GSAP, three.js), 34 páginas em português, inglês e chinês simplificado.
- Página inicial (hub) + 7 landing pages de serviço + Quem somos + Obrigado + Privacidade + 404:
  `/visto-de-investidor` (principal), `/visto-de-investimento-imobiliario`, `/visto-de-reuniao-familiar`, `/regularizacao-chineses`, `/assessoria-em-rne`, `/naturalizacao-brasileira`, `/assessoria-em-visto`, `/quem-somos`. Mesmos caminhos em `/en/` e `/zh/`.
- Marca BrasilVisa: vermelho #CB3438, cinza #33373D, Montserrat e Heebo, logo do site atual.
- WhatsApp (11) 94973-6011 com mensagem pronta por serviço em todos os botões; e-mail contato@brasillvisa.com.br.
- FAQ de 5 perguntas por página, com fonte oficial; dados estruturados de empresa local, serviço e FAQ.
- SEO: sitemap.xml com hreflang, robots.txt, llms.txt, 30 imagens Open Graph, títulos e descriptions dentro do limite.
- Segurança: CSP com hashes, cabeçalhos em `.htaccess` e `_headers`, `npm audit` com 0 vulnerabilidades.
- Conferido no navegador: contraste AA e nenhuma rolagem lateral no celular em 14 páginas; FAQ, formulário, 3D e mapa funcionando na build de produção.

## Como publicar
```bash
cd app
npm install
npm run build
```
Enviar `app/dist/` para a hospedagem. O domínio está provisório em `app/astro.config.mjs` (`site`), `public/robots.txt` e `public/llms.txt`: trocar pelo domínio internacional (.com) quando definido e rodar `python -I tools/og.py` + `npm run build` de novo.

## O que depende do cliente
- **Domínio internacional (.com)** e hospedagem, conforme a reunião.
- **Anos de atuação** (o site atual diz 9 e 10 em páginas diferentes).
- **Confirmação do retorno em até 24 horas.**
- **Autorização dos 3 depoimentos** reaproveitados do site atual (Rafaela, Luiz, Tiago) ou troca por avaliações do Google.
- **Registro na OAB:** se existe sociedade de advogados; define o que pode ser dito sobre a equipe jurídica.
- **Fotos reais da equipe**; fotos para imobiliário, reunião familiar e chineses (hoje sem foto no topo).
- **Prazo de guarda e encarregado de dados** na Política de Privacidade.
- **Revisão das traduções** por nativos, em especial a página chinesa e os termos jurídicos.
- **Conferir antes de publicar:** taxa MRV do visto americano, Portaria Interministerial 12/2018, regras bancárias para sócio não residente, prorrogação da isenção chinesa depois de 31/12/2026.
- **Google Search Console** (enviar o sitemap) e **Analytics** (exige liberar na CSP e banner de cookies).
- Corrigir no site atual o e-mail da página de contato, que aponta para contato@altrio.com.br.
