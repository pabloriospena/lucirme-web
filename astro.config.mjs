// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static', // ← Cambia a 'static' en vez de 'server'
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});