// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'

export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel(),
  output: 'static', // o 'server' si usas APIs/SSR
  site: 'https://lucirme-web.vercel.app',
  vite: {
    resolve: {
      alias: {
        // Alias seguros para Vercel
        '@': '/src',
      },
    },
  },
})