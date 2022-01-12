import fs from 'fs';
import path from 'path';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import dtsPlugin from 'vite-plugin-dts';

const { dependencies } = JSON.parse(fs.readFileSync('./package.json'));
const external = ['vue', Object.keys(dependencies ?? [])];
const rootPath = path.resolve();
const outDir = 'es';
const preserveModulesRoot = 'src';

export default build({
  plugins: [dtsPlugin({
    cleanVueFileName: true,
    beforeWriteFile(filePath, content){
      return {
        filePath: filePath.replace(`${rootPath}/${outDir}/${preserveModulesRoot}`, `${rootPath}/${outDir}`),
        content,
      };
    }
  }), vue()],
  build: {
    target: 'esnext',
    outDir,
    emptyOutDir: true,
    minify: false,
    brotliSize: false,
    rollupOptions: {
      input: './src',
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot,
      },
      external,
    },
    lib: {
      formats: ['es'],
    },
  },
});