// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static', // ← Ya no necesitas 'hybrid', static ahora lo incluye
  adapter: vercel(), // ← ESTO es necesario para que las API routes funcionen
  vite: {
    plugins: [tailwindcss()]
  }
});