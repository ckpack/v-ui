import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { alias, baseExternal, globals, name } from './vite-common'

export default defineConfig({
  plugins: [vue(), DefineOptions()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      output: {
        exports: 'named',
        globals,
      },
      external: baseExternal,
    },
    lib: {
      name,
      entry: './src',
      formats: ['es', 'cjs', 'iife'],
      fileName: format => `index.${format}.js`,
    },
  },
  resolve: {
    alias,
  },
})
