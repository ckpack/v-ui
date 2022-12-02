import { css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/themes';

export const buttonStyle = () => {
  const ns = useNamespace('space');

  // ns.iv();
  // useCssVars(() => ({
  //   [ns.vn('border-radius')]: '0.25em',
  //   [ns.vn('border-radius-round')]: '999em',
  // }));

  const base = ns.b();
  const hashId = css({
    [`&.${base}`]: {
      display: 'flex',
    },
  });

  return {
    ns,
    hashId,
  };
};

export const buttonInjectionKey = Symbol('buttonInjectionKey') as InjectionKey<ReturnType<typeof buttonStyle>>;
