import { getCurrentInstance, inject } from 'vue';
import { useCssVars } from './useCssVars';
import defaultConfig, { type Config, configInjectionKey } from '@/defaultConfig';

export const useNamespace = (block = '', config?: Config) => {
  console.log(block);
  const _config = { ...defaultConfig, ...config };
  const { namespace } = getCurrentInstance() ? inject(configInjectionKey, _config) : _config;

  const b = () => `${namespace}${block ? `-${block}` : ''}`;
  const is = (name: string, state = true) => {
    return state ? `${b()}-is-${name}` : '';
  };

  const m = (type: string, modifier?: string) => {
    return modifier ? `${b()}-${type}-${modifier}` : '';
  };

  const v = (...args: (string | number)[]) => `--${b()}-${args.join('-')}`;
  const vv = (...args: (string | number)[]) => `var(--${b()}-${args.join('-')})`;
  const vb = (...args: (string | number)[]) => `var(--${namespace}-${args.join('-')})`;
  const vn = (...args: (string | number)[]) => `${b()}-${args.join('-')}`;

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
    vv,
    vn,
    vb,
    v,
    iv,
  };
};
