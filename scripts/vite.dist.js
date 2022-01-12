import { build } from 'vite';
import vue from '@vitejs/plugin-vue';

const external = ['vue'];
const globals = {
  vue: 'Vue',
};

build({
  plugins: [vue()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    brotliSize: false,
    rollupOptions: {
      input: './src/index.ts',
      output: {
        exports: 'named',
        globals,
      },
      external,
    },
    lib: {
      name: 'ckvv',
      formats: ['cjs', 'es', 'iife'],
      fileName: (format) => `index.${format}.js`,
    }
  },
});