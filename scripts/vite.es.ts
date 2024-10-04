import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';
import { alias, external } from './vite-common';

const preserveModulesRoot = 'src';
export default defineConfig({
  plugins: [dtsPlugin({
    exclude: ['node_modules', 'components.d.ts'],
  }), vue()],
  build: {
    target: 'esnext',
    outDir: 'es',
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot,
      },
      external,
    },
    lib: {
      entry: './src',
      formats: ['es'],
    },
  },
  resolve: {
    alias,
  },
});
