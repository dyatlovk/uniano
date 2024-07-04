import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'
export default defineConfig({
  base: "/union-project/",
  plugins: [
    react(), svgr()
  ],
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/common/styles/variables"; // Adjust the path accordingly
        `,
      },
    },
  },
  resolve: {
    alias: {
      // Use import.meta.url to get the current module URL
      '@': new URL('src', import.meta.url).pathname,
      '@assets': new URL('src/assets', import.meta.url).pathname,
      '@common': new URL('src/common', import.meta.url).pathname,
      '@pages': new URL('src/pages', import.meta.url).pathname,
      // Add other aliases as needed
    },
  },
  build: {
    target: 'esnext',
  },
});