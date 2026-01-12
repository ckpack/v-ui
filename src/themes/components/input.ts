import type { InjectionKey } from 'vue';
import { css } from '@emotion/css';
import { useNamespace } from '@/hooks';

export function inputTheme() {
  const ns = useNamespace('input');

  const base = ns.b();
  const hashId = css({
    [`&.${base}`]: {
      [ns.v('border-width')]: ns.vb('border-width'),
      [ns.v('border-style')]: ns.vb('border-style'),
      [ns.v('border-radius')]: ns.vb('border-radius'),
      [ns.v('border-color')]: ns.vb('color', 'gray'),
      [ns.v('border')]: `${ns.vv('border-width')} ${ns.vv('border-style')} ${ns.vv('border-color')}`,
      'cursor': 'pointer',
      'border': ns.vv('border'),
      'borderRadius': ns.vv('border-radius'),
      'height': ns.vb('control-height'),
      'padding': `0 ${ns.vb('padding')}`,
      '&:hover': {
        [ns.v('border-color')]: ns.vb('color', 'primary', 'hover'),
      },
    },
    '& input': {
      width: '100%',
      height: '100%',
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      border: 0,
      outline: 0,
    },
    [`&.${ns.is('focus')}`]: {
      [ns.v('border-color')]: ns.vb('color', 'primary'),
    },
  });

  return {
    ns,
    hashId,
  };
}

export const inputInjectionKey: InjectionKey<ReturnType<typeof inputTheme>> = Symbol('inputInjectionKey');
