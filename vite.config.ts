import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import externalPlugin from './scripts/vite-plugin-external';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [externalPlugin(), vue()],
  build: {
    target: 'esnext',
    outDir: 'es',
    emptyOutDir: true,
    minify: false,
    brotliSize: false,
    rollupOptions: {
      input: './src',
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    lib: {
      name: 'VUI',
      entry: 'index.ts',
      formats: ['es'],
    },
  },
});
