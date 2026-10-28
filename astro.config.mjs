// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// URL do site, em ordem de prioridade:
// 1. SITE_URL — defina na Vercel quando tiver seu domínio (ex.: https://www.passageiropremium.com.br)
// 2. VERCEL_PROJECT_PRODUCTION_URL — preenchida automaticamente pela Vercel (endereço .vercel.app)
// 3. localhost, para desenvolvimento
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site =
  process.env.SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:4321');

export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
});
