import fs from 'node:fs';
import { URL, fileURLToPath } from 'node:url';

const { dependencies } = JSON.parse(`${fs.readFileSync('./package.json')}`);

export const name = 'VUI';
export const globals = {
  vue: 'Vue',
};
export const baseExternal = ['vue'];
export const external = [...baseExternal, ...Object.keys(dependencies ?? [])];

export const rootPath = fileURLToPath(new URL('../', import.meta.url));

export const alias = {
  '@': fileURLToPath(new URL('../src', import.meta.url)),
};

