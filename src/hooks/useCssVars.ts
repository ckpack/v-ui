import { useCssVars as _useCssVars, getCurrentInstance } from 'vue';
import { injectGlobal } from '@emotion/css';

export const useCssVars = (getter: (ctx?: any) => Record<string, string>) => {
  if (getCurrentInstance()) { _useCssVars(getter); }
  else {
    const vars = getter();
    injectGlobal({
      ':root': Object.keys(vars).reduce((pre, cur) => {
        pre[`--${cur}`] = vars[cur];
        return pre;
      }, {} as Record<string, string>),
    });
  }
};
