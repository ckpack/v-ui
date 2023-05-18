import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dtsPlugin from 'vite-plugin-dts';
import { alias, external } from './vite-common';

const preserveModulesRoot = 'src';
export default defineConfig({
  plugins: [dtsPlugin({
    skipDiagnostics: false,
    cleanVueFileName: true,
    exclude: ['node_modules', 'types.d.ts'],
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
