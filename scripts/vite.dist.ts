import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/dist/vite';
import { alias, baseExternal, globals, name } from './vite-common';

export default defineConfig({
  plugins: [vue(), DefineOptions()],
  define: {
    'process.env.NODE_ENV': '"production"', // https://vitejs.dev/config/shared-options.html#define
    'preventAssignment': true,
  },
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
});
