import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';
import { css } from '@emotion/css';

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
