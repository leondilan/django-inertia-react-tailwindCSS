const { defineConfig } = require('vite')
const tailwindcss = require('@tailwindcss/vite').default
const { resolve } = require('path')

module.exports = defineConfig({
  root: resolve('./static/src'),
  base: '/static/',

  plugins: [
    tailwindcss(), // ✅ maintenant c’est bien une fonction
  ],

  server: {
    host: 'localhost',
    port: 5173,
    open: false,
    watch: {
      usePolling: true,
    },
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  build: {
    outDir: resolve('./static/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',

    rollupOptions: {
      input: {
        main: resolve('./static/src/js/main.jsx'),
      },
    },
  },
})
