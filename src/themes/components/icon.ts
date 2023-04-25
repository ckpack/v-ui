import { type CSSInterpolation, css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';
import { spinAnimation } from '@/themes/styles';

export function iconTheme() {
  const ns = useNamespace('icon');

  const hashId = css({
    [`&.${ns.b()}`]: {
      color: ns.vv('color'),
      fontSize: ns.vv('font-size'),
      cursor: ns.vv('cursor'),
      display: 'inline-flex',
    },
    '& svg': {
      width: '1em',
      height: '1em',
      fill: 'currentcolor',
    },
    '&:hover': {
      color: ns.vv('color', 'hover'),
    },
    [`&.${ns.is('spin')}`]: {
      '& svg': spinAnimation,
    },
  } as CSSInterpolation);

  return {
    ns,
    hashId,
  };
}

export const iconInjectionKey: InjectionKey<ReturnType<typeof iconTheme>> = Symbol('iconInjectionKey');
