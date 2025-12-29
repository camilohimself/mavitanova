// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mavitanova.ch',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
  },

  // Image optimization
  image: {
    domains: [],
  },
});
