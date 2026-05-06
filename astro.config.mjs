// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'; // 👈 Correcto: sin "/serverless"

export default defineConfig({
  output: 'server', // 👈 Habilita funciones serverless para API routes
  adapter: vercel(), // 👈 Activa el adaptador de Vercel
  vite: {
    plugins: [tailwindcss()] // ✅ Tailwind se mantiene igual
  }
});