import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
