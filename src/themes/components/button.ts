import { type CSSInterpolation, css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';

export const buttonTheme = () => {
  const ns = useNamespace('button');

  const getButtonStyle = ({ bgColor, bdColor, textColor }: { bgColor: string; bdColor: string; textColor: string }) => {
    return {
      [ns.v('bg-color')]: ns.vb('color', bgColor),
      [ns.v('bg-color', 'hover')]: ns.vb('color', bgColor, 'hover'),
      [ns.v('bg-color', 'active')]: ns.vb('color', bgColor, 'active'),
      [ns.v('bg-color', 'disabled')]: ns.vb('color', bgColor, 'disabled'),
      [ns.v('border-color')]: ns.vb('color', bdColor),
      [ns.v('border-color', 'hover')]: ns.vb('color', bdColor, 'hover'),
      [ns.v('border-color', 'active')]: ns.vb('color', bdColor, 'active'),
      [ns.v('border-color', 'disabled')]: ns.vb('color', bdColor, 'disabled'),
      [ns.v('text-color')]: ns.vb('color', textColor),
      [ns.v('text-color', 'hover')]: ns.vb('color', textColor, 'hover'),
      [ns.v('text-color', 'active')]: ns.vb('color', textColor, 'active'),
      [ns.v('text-color', 'disabled')]: ns.vb('color', textColor, 'disabled'),
    };
  };

  const disabled = ns.is('disabled');

  const hashId = css({
    [`&.${ns.b()}`]: {
      [ns.v('border-width')]: ns.vb('border-width'),
      [ns.v('border-style')]: ns.vb('border-style'),
      [ns.v('control-height')]: ns.vb('control-height'),
      [ns.v('border-radius')]: ns.vb('border-radius'),
      [ns.v('padding')]: ns.vb('padding'),
      [ns.v('border')]: `${ns.vv('border-width')} ${ns.vv('border-style')} ${ns.vv('border-color')}`,
      [ns.v('border', 'hover')]: `${ns.vv('border-width')} ${ns.vv('border-style')} ${ns.vv('border-color', 'hover')}`,
      [ns.v('border', 'active')]: `${ns.vv('border-width')} ${ns.vv('border-style')} ${ns.vv('border-color', 'active')}`,
      [ns.v('border', 'disabled')]: `${ns.vv('border-width')} ${ns.vv('border-style')} ${ns.vv('border-color', 'disabled')}`,
      'boxSizing': 'border-box',
      'height': ns.vv('control-height'),
      'lineHeight': `calc(${ns.vv('control-height')} - ${ns.vv('border-width')} * 2)`,
      'borderRadius': ns.vv('border-radius'),
      'padding': `0 ${ns.vv('padding')}`,
      'fontSize': ns.vv('font-size'),
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
      [`&.${disabled}`]: {
        cursor: 'not-allowed',
        backgroundColor: ns.vv('bg-color', 'disabled'),
        border: ns.vv('border', 'disabled'),
        color: ns.vv('text-color', 'disabled'),
      },
    },
    ...['default', 'primary', 'success', 'error', 'warning'].reduce((pre: any, cur) => {
      const color = cur === 'default' ? 'bg' : cur;

      const themeStyle: CSSInterpolation = getButtonStyle({
        bgColor: color,
        bdColor: color,
        textColor: cur === 'default' ? 'text' : 'white',
      });

      const textColor = cur === 'default' ? 'text' : cur;
      themeStyle[`&.${ns.is('text')}`] = getButtonStyle({
        bgColor: 'transparent',
        bdColor: 'transparent',
        textColor,
      });

      themeStyle[`&.${ns.is('outlined')}`] = getButtonStyle({
        bgColor: 'transparent',
        bdColor: textColor,
        textColor,
      });

      pre[`&.${ns.m('theme', cur)}`] = themeStyle;
      return pre;
    }, {}),
    [`&.${ns.is('round')}`]: {
      borderRadius: ns.vb('border-radius', 'round'),
    },
    [`&.${ns.is('raised')}`]: {
      boxShadow: ns.vb('box-shadow', 'raised'),
    },
    ...['small', 'medium', 'large'].reduce((pre: any, cur) => {
      pre[`&.${ns.m('size', cur)}`] = {
        [ns.v('control-height')]: ns.vb('control-height', cur),
        [ns.v('padding')]: ns.vb('padding', cur),
        [ns.v('font-size')]: ns.vb('font-size', cur),
      };
      return pre;
    }, {}),
  } as CSSInterpolation);

  return {
    ns,
    hashId,
  };
};

export const buttonInjectionKey: InjectionKey<ReturnType<typeof buttonTheme>> = Symbol('buttonInjectionKey');
