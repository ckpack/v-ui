import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { alias, external } from './vite-common'

const preserveModulesRoot = 'src'
export default defineConfig({
  plugins: [dtsPlugin({
    skipDiagnostics: false,
    logDiagnostics: true,
    cleanVueFileName: true,
  }), vue(), DefineOptions()],
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
})
