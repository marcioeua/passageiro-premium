import type { APIRoute } from 'astro';

// Gerado no build para usar sempre a URL configurada em astro.config.mjs
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
