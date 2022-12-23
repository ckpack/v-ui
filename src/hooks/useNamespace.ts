import { unref } from 'vue';
import { useConfig } from '@/hooks';

export const useNamespace = (block = '') => {
  const { prefixCls } = unref(useConfig());

  const b = () => `${prefixCls}${block ? `-${block}` : ''}`;
  const is = (name: string, state = true) => {
    return state ? `${b()}-is-${name}` : '';
  };

  const m = (type: string, modifier?: string) => {
    return modifier ? `${b()}-${type}-${modifier}` : '';
  };

  const v = (...args: (string | number)[]) => `--${b()}-${args.join('-')}`;
  const vv = (...args: (string | number)[]) => `var(--${b()}-${args.join('-')})`;
  const vb = (...args: (string | number)[]) => `var(--${prefixCls}-${args.join('-')})`;
  const vn = (...args: (string | number)[]) => `${b()}-${args.join('-')}`;

  return {
    b,
    is,
    m,
    vv,
    vn,
    vb,
    v,
  };
};
