import { css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';

export function inputTheme() {
  const ns = useNamespace('input');

  const base = ns.b();
  const hashId = css({
    [`&.${base}`]: {},
  });

  return {
    ns,
    hashId,
  };
}

export const inputInjectionKey: InjectionKey<ReturnType<typeof inputTheme>> = Symbol('inputInjectionKey');
