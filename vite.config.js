import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: true,
    assetsInlineLimit: 4096,
  },
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5174, // Your port
    strictPort: false, // Allow fallback to next available port if 5174 is taken
    hmr: {
      clientPort: 5174, // For HMR in network mode
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: false,
  },
})
