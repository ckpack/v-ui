import { css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';

export function formItemTheme() {
  const ns = useNamespace('form-item');

  const base = ns.b();
  const hashId = css({
    [`&.${base}`]: {},
  });

  return {
    ns,
    hashId,
  };
}

export const formItemInjectionKey: InjectionKey<ReturnType<typeof formItemTheme>> = Symbol('formItemInjectionKey');
