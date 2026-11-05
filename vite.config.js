import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // أضفنا السطر ده عشان مسارات الملفات تشتغل صح على Vercel وتتجنبي الشاشة البيضاء
  base: './', 
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'https://white-seahorse-266682.hostingersite.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    assetsInlineLimit: 0, 
  },
})