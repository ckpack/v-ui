import fs from 'fs'
import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'
import Unocss from 'unocss/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

const { dependencies } = JSON.parse(`${fs.readFileSync('./package.json')}`)
const external = ['vue', ...Object.keys(dependencies ?? [])]
const outDir = 'es'
const preserveModulesRoot = 'src'

export default build({
  plugins: [Unocss({
    mode: 'vue-scoped',
  }), dtsPlugin({
    skipDiagnostics: false,
    logDiagnostics: true,
    cleanVueFileName: true,
  }), vue(), DefineOptions()],
  build: {
    target: 'esnext',
    outDir,
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
})
