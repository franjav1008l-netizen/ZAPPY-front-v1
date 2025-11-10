import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { componentTagger } from 'lovable-tagger'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Para Vercel usar '/', para GitHub Pages usar '/tailadmin-vuejs/'
  // Puedes cambiar esto según donde despliegues
  base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/' : '/'),
  plugins: [
    vue(), 
    vueJsx(), 
    vueDevTools(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}))
