import { provide } from 'vue';

export const useThemes = (themes: Record<symbol, any>) => {
  Object.getOwnPropertySymbols(themes).forEach((key) => {
    provide(key, themes[key]());
  });
};

