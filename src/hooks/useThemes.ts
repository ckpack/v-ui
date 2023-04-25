import { type App, provide, unref } from 'vue';
import { useConfig } from './useConfig';

export function useThemes(themes?: Record<symbol, any>, app?: App) {
  const _themes = themes || unref(useConfig()).themes;
  Object.getOwnPropertySymbols(_themes).forEach((key) => {
    (app?.provide || provide)(key, _themes[key]());
  });
}
