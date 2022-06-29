import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import DefineOptions from 'unplugin-vue-define-options/vite';

const name = 'VUI';
const external = ['vue'];
const globals = {
  vue: 'Vue',
};

build({
  plugins: [Unocss({
    mode: 'vue-scoped',
  }), vue(), DefineOptions()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    brotliSize: false,
    rollupOptions: {
      output: {
        exports: 'named',
        globals,
      },
      external,
    },
    lib: {
      name,
      entry: './src',
      formats: ['cjs', 'es', 'iife'],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
