import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { alias } from '../scripts/vite-common';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './dev',
  resolve: {
    alias: {
      ...alias,
    },
  },
});
