// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Troque pela URL final do seu domínio antes do deploy
export default defineConfig({
  site: 'https://www.passageiropremium.com.br',
  integrations: [mdx(), sitemap()],
});
