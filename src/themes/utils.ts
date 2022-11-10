import { injectGlobal } from '@emotion/css';
import { CLS_PREFIX as _CLS_PREFIX, CSS_VAR_PREFIX as _CSS_VAR_PREFIX } from '@/defaultConfig';

export const useNamespace = (block = '') => {
  const __VUI__: any = Object.assign({ CLS_PREFIX: _CLS_PREFIX, CSS_VAR_PREFIX: _CSS_VAR_PREFIX }, (globalThis as any)?.__VUI__);

  const { CLS_PREFIX, CSS_VAR_PREFIX } = __VUI__;

  const b = () => `${CLS_PREFIX}-${block}`;
  const is = (name: string, state = true) => {
    return state ? `${b()}-is-${name}` : '';
  };

  const m = (type: string, modifier?: string) => {
    return modifier ? `${b()}-${type}-${modifier}` : '';
  };

  const v = (...args: (string | number)[]) => `var(--${CSS_VAR_PREFIX}-${block}-${args.join('-')})`;

  const iv = (vars: Record<string, string>) => {
    injectGlobal({
      ':root': Object.keys(vars).reduce((pre: any, cur) => {
        pre[`--${CSS_VAR_PREFIX}-${block}-${cur}`] = vars[cur];
        return pre;
      }, {}) as any,
    });
  };

  return {
    is,
    b,
    m,
    iv,
    v,
  };
};
