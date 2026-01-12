import type { InjectionKey } from 'vue';
import { css } from '@emotion/css';
import { useNamespace } from '@/hooks';

export function formTheme() {
  const ns = useNamespace('form');

  const base = ns.b();
  const hashId = css({
    [`&.${base}`]: {},
  });

  return {
    ns,
    hashId,
  };
}

export const formInjectionKey: InjectionKey<ReturnType<typeof formTheme>> = Symbol('formInjectionKey');
