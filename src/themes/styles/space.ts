import { css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';

export const spaceStyle = () => {
  const ns = useNamespace('space');

  const base = ns.b();
  const hashId = css({
    [`&.${base}`]: {
      display: 'flex',
      [ns.v('gap-medium')]: ns.vb('padding'),
      [ns.v('gap-large')]: ns.vb('padding', 'lg'),
      [ns.v('gap-small')]: ns.vb('padding', 'sm'),
    },
  });

  return {
    ns,
    hashId,
  };
};

export const spaceInjectionKey: InjectionKey<ReturnType<typeof spaceStyle>> = Symbol('spaceInjectionKey');
