import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import react from '@astrojs/react';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://soizhiwen.com',
  integrations: [expressiveCode({
    themes: ['github-light'],
    styleOverrides: {
      width: '100%',
      frames: {
        shadowColor: 'transparent',
      }
    }
  }), mdx(), sitemap(), icon(), react()],
  vite: {
    plugins: [tailwindcss()]
  }
});