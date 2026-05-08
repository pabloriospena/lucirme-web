// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
    trailingSlash: 'ignore', // ← Esto evita conflictos de rutas
  vite: {
    plugins: [tailwindcss()]
  }
});