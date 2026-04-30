import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],
  ssr: {
    noExternal: ['react-helmet-async', 'framer-motion'],
  },
  build: {
    // Enable minification
    minify: 'esbuild', // Use esbuild for faster builds
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: isSsrBuild ? {
        // SSR build - no manual chunks
      } : {
        // Client build only - manual chunk splitting for better caching
        manualChunks: {
          // React core
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Framer Motion (large animation library)
          'animation': ['framer-motion'],
          // Auth and API
          'auth': ['@react-oauth/google', 'axios'],
          // Icons
          'icons': ['lucide-react'],
        },
        // Asset file naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          let extType = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType ?? '')) {
            extType = 'img';
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType ?? '')) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Source maps for production debugging
    sourcemap: false, // Disable in production for smaller bundle
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
}))
