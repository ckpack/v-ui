import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import replace from '@rollup/plugin-replace';
import { alias, baseExternal, globals, name } from './vite-common';

export default defineConfig({
  plugins: [vue(), DefineOptions(), replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    'preventAssignment': true,
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
});
