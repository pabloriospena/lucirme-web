// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'

export default defineConfig({
  integrations: [tailwind()],  // ← Esta línea es crucial
  adapter: vercel(),
  output: 'static',
  site: 'https://lucirme-web.vercel.app',
})