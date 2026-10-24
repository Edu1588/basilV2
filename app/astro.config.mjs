// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Domínio provisório: trocar pelo domínio internacional (.com) quando for definido.
  site: 'https://brasillvisa.com.br',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  image: {
    service: passthroughImageService(),
  },
  // CSP com hashes gerados pelo Astro para os scripts e estilos inline (ilhas, ClientRouter).
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "frame-src https://maps.google.com https://www.google.com",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
      ],
    },
  },
  integrations: [
    react(),
  ],
  // assetsInlineLimit 0: nenhuma fonte vira data: no CSS (a CSP só permite fontes do próprio site).
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 } },
});
