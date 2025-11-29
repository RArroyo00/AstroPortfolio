import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  // add yur domain name here
  site: 'https://rarroyo00.github.io',
  base: '/AstroPortfolio/',
  compressHTML: true,
  integrations: [sitemap()]
});