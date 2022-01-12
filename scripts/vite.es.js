import {
  build
} from 'vite';
import fs from 'fs';
import vue from '@vitejs/plugin-vue';
import dtsPlugin from 'vite-plugin-dts';

const {
  dependencies
} = JSON.parse(fs.readFileSync('./package.json'));
const external = ['vue', Object.keys(dependencies ?? [])];

export default build({
  plugins: [dtsPlugin({
    compilerOptions: {
      outDir: 'es'
    }
  }), vue()],
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
      external,
    },
    lib: {
      formats: ['es'],
    },
  },
});