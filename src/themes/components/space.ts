import { css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';

export function spaceTheme() {
  const ns = useNamespace('space');

  const base = ns.b();
  const hashId = css({
    [`&.${base}`]: {
      display: 'flex',
      gap: ns.vv('gap-size'),
    },
    ...['small', 'medium', 'large'].reduce((pre: any, cur) => {
      pre[`&.${ns.m('size', cur)}`] = {
        [ns.v('gap-size')]: ns.vb('padding', cur),
      };
      return pre;
    }, {}),
  });

  return {
    ns,
    hashId,
  };
}

export const spaceInjectionKey: InjectionKey<ReturnType<typeof spaceTheme>> = Symbol('spaceInjectionKey');
