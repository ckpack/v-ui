import { css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/themes';
import type { Config } from '@/defaultConfig';

export const spaceStyle = (config?: Config) => {
  const ns = useNamespace('space', config);

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

export const spaceInjectionKey = Symbol('buttonInjectionKey') as InjectionKey<ReturnType<typeof spaceStyle>>;
