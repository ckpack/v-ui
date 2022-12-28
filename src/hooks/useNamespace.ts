import { unref } from 'vue';
import { useConfig } from '@/hooks';
import type { MaybeRef } from '@/types';

export const useNamespace = (block = '') => {
  const { prefixCls } = unref(useConfig());

  const b = () => `${prefixCls}${block ? `-${block}` : ''}`;
  const is = (name: MaybeRef<string>, state: MaybeRef<boolean> = true) => {
    return unref(state) ? `${b()}-is-${unref(name)}` : '';
  };

  const m = (type: MaybeRef<string>, modifier?: MaybeRef<string>) => {
    return unref(modifier) ? `${b()}-${unref(type)}-${unref(modifier)}` : '';
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
