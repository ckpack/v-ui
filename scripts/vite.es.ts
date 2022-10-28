import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dtsPlugin from 'vite-plugin-dts';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { alias, external } from './vite-common';
import vitePluginSass from './vite-plugin-sass';

const preserveModulesRoot = 'src';
export default defineConfig({
  plugins: [dtsPlugin({
    skipDiagnostics: false,
    logDiagnostics: true,
    cleanVueFileName: true,
    exclude: ['node_modules', 'types.d.ts'],
  }), vue(), DefineOptions(), vitePluginSass({
    outdir: './es',
    isCpScss: true,
    handlerOutDir: (val: string) => `${val}`.replace('src/', ''),
    globSync: ['src/**/*.scss'],
  })],
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
