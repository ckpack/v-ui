import { type CSSInterpolation, css } from '@emotion/css';
import { computed } from 'vue';
import { buttonThemes } from './button';
import * as colors from '@/themes/colors';

import { useNamespace } from '@/themes';

export const { iv, b, is, m, v } = useNamespace('button');

iv({
  'border-radius': '0.25em',
  'border-radius-round': '999em',
});

const getButtonDisabledStyle = () => {
  return {
    'cursor': 'not-allowed',
    'backgroundColor': colors.gray[3],
    'border': `1px solid ${colors.gray[3]}`,
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

const hashId = css({
  [`&.${b()}`]: {
    padding: '0.5rem 1rem',
    lineHeight: 1,
    borderRadius: v('border-radius'),
    cursor: 'pointer',
  },
  [`&.${is('round')}`]: {
    borderRadius: v('border-radius', 'round'),
  },
  ...buttonThemes.reduce((pre: any, cur: any) => {
    pre[`&.${m('theme', cur)}`] = getButtonThemeStyle(cur);
    return pre;
  }, {}),
  [`&.${is('disabled')}`]: getButtonDisabledStyle(),
});

export const useButton = ({ props }: any) => {
  const button = computed(() => {
    return [
      hashId,
      b(),
      is('round', props.round),
      is('disabled', props.disabled),
      m('theme', props.theme),
    ];
  });

  return {
    button,
  };
};
