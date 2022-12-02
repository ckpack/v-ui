import type { InjectionKey } from 'vue';
import { useNamespace } from '@/themes';

export const baseStyle = () => {
  const ns = useNamespace();
  ns.iv({
    kk: '20px',
  });
};

export const baseInjectionKey = Symbol('buttonInjectionKey') as InjectionKey<ReturnType<typeof baseStyle>>;

