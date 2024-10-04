import { injectGlobal } from '@emotion/css';
import { getCurrentInstance, useCssVars as vueUseCssVars } from 'vue';

export function useCssVars(getter: (ctx?: any) => Record<string, string>) {
  if (getCurrentInstance()) {
    vueUseCssVars(getter);
  } else {
    const vars = getter();
    injectGlobal({
      ':root': Object.keys(vars).reduce((pre, cur) => {
        pre[`--${cur}`] = vars[cur];
        return pre;
      }, {} as Record<string, string>),
    });
  }
}
