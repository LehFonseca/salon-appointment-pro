import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // Aumenta o limite de aviso para 1000kB
    rollupOptions: {
      external: ['react-compiler-runtime'],
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          tanstack: ['@tanstack/react-query'],
          radix: [/@radix-ui/],
          icons: ['lucide-react'],
          vendors: [
            'date-fns',
            'zod',
            'react-hook-form',
            '@hookform/resolvers',
            'sonner',
            'recharts'
          ],
        },
      },
    },
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': '/src', // Configura alias para imports com @/
    },
  },
  server: {
    port: 5173,
    open: true, // Abre o navegador automaticamente
  },
  preview: {
    port: 4173,
  },
})