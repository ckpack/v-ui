import { inject, useCssVars } from 'vue';
import defaultConfig, { configInjectionKey } from '@/defaultConfig';

export const useNamespace = (block = '') => {
  const { namespace } = inject(configInjectionKey) || defaultConfig;

  const b = () => `${namespace}${block ? `-${block}` : ''}`;
  const is = (name: string, state = true) => {
    return state ? `${b()}-is-${name}` : '';
  };

  const m = (type: string, modifier?: string) => {
    return modifier ? `${b()}-${type}-${modifier}` : '';
  };

  const vn = (...args: (string | number)[]) => `${b()}-${args.join('-')}`;
  const vp = (...args: (string | number)[]) => `--${b()}-${args.join('-')}`;
  const v = (...args: (string | number)[]) => `var(--${b()}-${args.join('-')})`;

  const iv = (vars: Record<string, string>) => {
    useCssVars(() => {
      const cssVars: Record<string, string> = {};
      for (const key in vars) { cssVars[vn(key)] = vars[key]; }
      return cssVars;
    });
  };

  return {
    namespace,
    b,
    is,
    m,
    vp,
    vn,
    v,
    iv,
  };
};
