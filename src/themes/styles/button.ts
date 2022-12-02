import { type CSSInterpolation, css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { buttonThemes } from '@/components/button/button';
import { useColors, useNamespace } from '@/themes';

export const buttonStyle = () => {
  const ns = useNamespace('button');
  const colors = useColors();
  ns.iv({
    'border-radius': '0.25em',
    'border-radius-round': '999em',
    'line-height': '32px',
  });

  const getButtonDisabledStyle = () => {
    return {
      'cursor': 'not-allowed',
      'backgroundColor': ns.v('color-gray-3'),
      'border': `1px solid ${ns.v('color-gray-3')}`,
      'color': `${colors.gray[6]}`,
      '&:hover': {
        backgroundColor: colors.gray[3],
        border: `1px solid ${colors.gray[3]}`,
      },
      '&:active': {
        backgroundColor: colors.gray[3],
        border: `1px solid ${colors.gray[3]}`,
      },
    } as CSSInterpolation;
  };

  const getButtonStyle = ({ baseColor, fontColor }: { baseColor: string[]; fontColor: string[] }) => {
    return {
      'backgroundColor': baseColor[5],
      'border': `1px solid ${baseColor[5]}`,
      'color': `${fontColor[5]}`,
      '&:hover': {
        backgroundColor: baseColor[4],
        border: `1px solid ${baseColor[4]}`,
      },
      '&:active': {
        backgroundColor: baseColor[6],
        border: `1px solid ${baseColor[6]}`,
      },
    } as CSSInterpolation;
  };

  const getButtonThemeStyle = (theme: typeof buttonThemes[number]) => {
    const { fontColor, baseColor } = theme !== 'default'
      ? {
          fontColor: colors.white,
          baseColor: colors[theme],
        }
      : {
          fontColor: colors.black,
          baseColor: colors.gray,
        };
    return getButtonStyle({
      baseColor,
      fontColor,
    });
  };

  const base = ns.b();
  const round = ns.is('round');
  const disabled = ns.is('disabled');
  const hashId = css({
    [`&.${base}`]: {
      padding: '0 1rem',
      lineHeight: ns.v('line-height'),
      borderRadius: ns.v('border-radius'),
      cursor: 'pointer',
    },
    [`&.${round}`]: {
      borderRadius: ns.v('border-radius', 'round'),
    },
    ...buttonThemes.reduce((pre: any, cur: any) => {
      pre[`&.${ns.m('theme', cur)}`] = getButtonThemeStyle(cur);
      return pre;
    }, {}),
    [`&.${disabled}`]: getButtonDisabledStyle(),
  });

  return {
    ns,
    hashId,
  };
};

export const buttonInjectionKey = Symbol('buttonInjectionKey') as InjectionKey<ReturnType<typeof buttonStyle>>;
