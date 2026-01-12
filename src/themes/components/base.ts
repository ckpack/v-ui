import type { InjectionKey } from 'vue';
import { unref } from 'vue';
import { useConfig, useCssVars, useNamespace } from '@/hooks';
import { flattenObj, generateColors } from '@/utils';

export function baseTheme() {
  const ns = useNamespace('');
  const config = useConfig();

  useCssVars(() => {
    const _config = unref(config);
    const cssVars = flattenObj({ ..._config.token, color: generateColors(_config.token.color) });
    return Object.keys(cssVars).reduce((pre, cur) => {
      pre[ns.vn(cur)] = cssVars[cur];
      return pre;
    }, {} as Record<string, string>);
  });
}

export const baseInjectionKey: InjectionKey<ReturnType<typeof baseTheme>> = Symbol('baseInjectionKey');
