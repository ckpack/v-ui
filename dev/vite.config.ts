import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { alias, rootPath } from '../scripts/vite-common';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  root: './dev',
  resolve: {
    alias: {
      ...alias,
      '@ckpack/v-ui': `${rootPath}`,
    },
  },
});