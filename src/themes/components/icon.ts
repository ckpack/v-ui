import { css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';
import { spinAnimation } from '@/themes/styles';

export const iconTheme = () => {
  const ns = useNamespace('icon');

  const disabled = ns.is('disabled');
  const hashId = css({
    [`&.${ns.b()}`]: {
      [ns.v('text-color')]: ns.vb('color', 'text'),
      color: ns.vv('text-color'),
      fontSize: ns.vv('font-size'),
    },
    '& svg': {
      width: '1em',
      height: '1em',
      fill: 'currentcolor',
    },
    '&:hover': {
      color: ns.vv('text-color', 'hover'),
      ...['default', 'primary', 'success', 'error', 'warning'].reduce((pre: any, cur) => {
        const textColor = cur === 'default' ? 'text' : cur;
        pre[`&.${ns.m('theme', cur)}`] = {
          [ns.v('text-color', 'hover')]: ns.vb('color', textColor),
        };
        return pre;
      }, {}),
    },
    [`&.${disabled}`]: {
      [ns.v('text-color', 'disabled')]: ns.vb('color', 'text', 'disabled'),
      cursor: 'not-allowed',
      color: ns.vv('text-color', 'disabled'),
    },
    [`&.${ns.is('spin')}`]: {
      '& svg': spinAnimation,
    },
    ...['small', 'medium', 'large'].reduce((pre: any, cur) => {
      pre[`&.${ns.m('size', cur)}`] = {
        [ns.v('font-size')]: ns.vb('font-size', cur),
      };
      return pre;
    }, {}),
  });

  return {
    ns,
    hashId,
  };
};

export const iconInjectionKey: InjectionKey<ReturnType<typeof iconTheme>> = Symbol('iconInjectionKey');
