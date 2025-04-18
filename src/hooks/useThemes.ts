import type { App } from 'vue';
import { provide, unref } from 'vue';
import { useConfig } from './useConfig'

export function useThemes(themes?: Record<symbol, any>, app?: App) {
  const _themes = themes || unref(useConfig()).themes;
  Object.getOwnPropertySymbols(_themes).forEach((key) => {
    (app?.provide as any || provide)(key, _themes[key]());
  });
}
