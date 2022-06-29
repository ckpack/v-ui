import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export const shortcuts = {
  btn: 'px-4 py-1 border rounded inline-block bg-green-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
};
export default defineConfig({
  shortcuts,
  presets: [
    presetUno({}),
    presetAttributify({
      prefix: 'w:',
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
});
