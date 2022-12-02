import { inject } from 'vue';
import { colors, colorsInjectionKey } from '@/themes/colors';

export const useColors = () => {
  return inject(colorsInjectionKey, colors);
};

export const useColorsCssVar = (vp: any) => {
  return Object.keys(colors).reduce((pre: any, cur) => {
    colors[cur as keyof typeof colors].forEach((v, index) => {
      pre[vp(`color-${cur}-${index}`)] = v;
    });
    return pre;
  }, {});
};
