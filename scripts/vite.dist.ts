import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { alias, baseExternal, globals, name } from './vite-common'
import vitePluginSass from './vite-plugin-sass'

export default defineConfig({
  plugins: [vue(), DefineOptions(), vitePluginSass({
    outdir: './dist',
    handlerOutDir: (val: string) => `${val}`.replace('src/styles', ''),
    globSync: ['src/styles/index.scss'],
  })],
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
    },
  },
  resolve: {
    alias,
  },
})
