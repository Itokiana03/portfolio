import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import tailwindcssPlugin from '@tailwindcss/postcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Base URL pour la racine (Vercel et autres)
  css: {
    postcss: {
      plugins: [tailwindcssPlugin, autoprefixer],
    },
  },
  server: {
    host: true, // écoute sur toutes les adresses réseau
    port: 5174
  }
})
