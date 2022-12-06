import { type CSSInterpolation, css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import type { Config } from '@/defaultConfig';
import { useNamespace } from '@/hooks';

export const buttonStyle = (config?: Config) => {
  const ns = useNamespace('button', config);

  const base = ns.b();
  const round = ns.is('round');
  const disabled = ns.is('disabled');

  const hashId = css({
    [`&.${base}`]: {
      [ns.v('control-height')]: ns.vb('control-height'),
      [ns.v('border-radius')]: ns.vb('border-radius'),
      [ns.v('padding')]: ns.vb('padding'),
      [ns.v('border')]: `${ns.vb('border-width')} ${ns.vb('border-style')} ${ns.vv('border-color')}`,
      [ns.v('border', 'hover')]: `${ns.vb('border-width')} ${ns.vb('border-style')} ${ns.vv('border-color', 'hover')}`,
      [ns.v('border', 'active')]: `${ns.vb('border-width')} ${ns.vb('border-style')} ${ns.vv('border-color', 'active')}`,
      'boxSizing': 'border-box',
      'lineHeight': ns.vv('control-height'),
      'borderRadius': ns.vv('border-radius'),
      'padding': `0 ${ns.vv('padding')}`,
      'backgroundColor': ns.vv('bg-color'),
      'border': ns.vv('border'),
      'color': ns.vv('text-color'),
      'cursor': 'pointer',
      '&:hover': {
        backgroundColor: ns.vv('bg-color', 'hover'),
        border: ns.vv('border', 'hover'),
        color: ns.vv('text-color', 'hover'),
      },
      '&:active': {
        backgroundColor: ns.vv('bg-color', 'active'),
        border: ns.vv('border', 'active'),
        color: ns.vv('text-color', 'active'),
      },
    },
    [`&.${ns.m('theme', 'default')}`]: {
      [ns.v('bg-color')]: ns.vb('color', 'gray'),
      [ns.v('bg-color', 'hover')]: ns.vb('color', 'gray', 'hover'),
      [ns.v('bg-color', 'active')]: ns.vb('color', 'gray', 'active'),
      [ns.v('border-color')]: ns.vb('color', 'gray'),
      [ns.v('border-color', 'hover')]: ns.vb('color', 'gray', 'hover'),
      [ns.v('border-color', 'active')]: ns.vb('color', 'gray', 'active'),
      [ns.v('text-color')]: ns.vb('color', 'text'),
      [ns.v('text-color', 'hover')]: ns.vb('color', 'text', 'hover'),
      [ns.v('text-color', 'active')]: ns.vb('color', 'text', 'active'),
      [`&.${disabled}`]: {
        [ns.v('bg-color')]: ns.vb('color', 'gray', 'disabled'),
        [ns.v('bg-color', 'hover')]: ns.vb('color', 'gray', 'disabled'),
        [ns.v('bg-color', 'active')]: ns.vb('color', 'gray', 'disabled'),
        [ns.v('border-color')]: ns.vb('color', 'gray', 'disabled'),
        [ns.v('border-color', 'hover')]: ns.vb('color', 'gray', 'disabled'),
        [ns.v('border-color', 'active')]: ns.vb('color', 'gray', 'disabled'),
        [ns.v('text-color')]: ns.vb('color', 'text', 'disabled'),
        [ns.v('text-color', 'hover')]: ns.vb('color', 'text', 'disabled'),
        [ns.v('text-color', 'active')]: ns.vb('color', 'text', 'disabled'),
      },
    },
    ...['primary', 'success', 'error', 'warning'].reduce((pre: any, cur: any) => {
      pre[`&.${ns.m('theme', cur)}`] = {
        [ns.v('bg-color')]: ns.vb('color', cur),
        [ns.v('bg-color', 'hover')]: ns.vb('color', cur, 'hover'),
        [ns.v('bg-color', 'active')]: ns.vb('color', cur, 'active'),
        [ns.v('border-color')]: ns.vb('color', cur),
        [ns.v('border-color', 'hover')]: ns.vb('color', cur, 'hover'),
        [ns.v('border-color', 'active')]: ns.vb('color', cur, 'active'),
        [ns.v('text-color')]: ns.vb('color', 'white'),
        [ns.v('text-color', 'hover')]: ns.vb('color', 'white', 'hover'),
        [ns.v('text-color', 'active')]: ns.vb('color', 'white', 'active'),
        [`&.${disabled}`]: {
          [ns.v('bg-color')]: ns.vb('color', cur, 'disabled'),
          [ns.v('bg-color', 'hover')]: ns.vb('color', cur, 'disabled'),
          [ns.v('bg-color', 'active')]: ns.vb('color', cur, 'disabled'),
          [ns.v('border-color')]: ns.vb('color', cur, 'disabled'),
          [ns.v('border-color', 'hover')]: ns.vb('color', cur, 'disabled'),
          [ns.v('border-color', 'active')]: ns.vb('color', cur, 'disabled'),
          [ns.v('text-color')]: ns.vb('color', 'white', 'disabled'),
          [ns.v('text-color', 'hover')]: ns.vb('color', 'white', 'disabled'),
          [ns.v('text-color', 'active')]: ns.vb('color', 'white', 'disabled'),
        },
      };
      return pre;
    }, {}),
    [`&.${round}`]: {
      borderRadius: ns.vb('border-radius', 'round'),
    },
    [`&.${disabled}`]: {
      cursor: 'not-allowed',
    },
  } as CSSInterpolation);

  return {
    ns,
    hashId,
  };
};

export const buttonInjectionKey = Symbol('buttonInjectionKey') as InjectionKey<ReturnType<typeof buttonStyle>>;
