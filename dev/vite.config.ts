import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unocss({
    preprocess: matcher => (matcher.startsWith('v-')
      ? matcher.slice(2)
      : undefined),
    mode: 'vue-scoped',
  }), vue(), DefineOptions()],
  root: './dev',
})
