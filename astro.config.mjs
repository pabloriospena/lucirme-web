// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel'; // ⬅️ VUELVE A IMPORTAR ESTO

export default defineConfig({
  output: 'hybrid', // ⬅️ CAMBIA 'static' POR 'hybrid'
  adapter: vercel(), // ⬅️ VUELVE A AGREGAR EL ADAPTER
  
  vite: {
    plugins: [tailwindcss()]
  }
});