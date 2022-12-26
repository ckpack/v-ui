import type { InjectionKey, Ref } from 'vue';
import type { ComponentSize } from '@/constants';

export const NAME = 'VUI';

export const size = 'medium' as ComponentSize;

export const prefixComponent = 'v';
export const prefixCls = prefixComponent;

export const token = {
  'control-height': {
    '': '32px',
    'small': '24px',
    'medium': '32px',
    'large': '40px',
  },
  'box-shadow': {
    raised: '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)',
  },
  'font': {
    size: {
      '': '14px',
      'small': '12px',
      'medium': '14px',
      'large': '16px',
    },
    weight: {
      '': 400,
    },
    family: 'system-ui',
  },
  'border': {
    width: '1px',
    style: 'solid',
    radius: {
      '': '6px',
      'small': '4px',
      'medium': '6px',
      'large': '8px',
      'round': '90px',
    },
  },
  'color': {
    bg: '#d9d9d9',
    text: '#262626',
    white: '#ffffff',
    black: '#000000',
    gray: '#d9d9d9',
    primary: '#8b5cf6',
    info: '#dcdcdc',
    warning: '#f59e0b',
    success: '#10b981',
    error: '#ef4444',
  },
  'margin': {
    '': '16px',
    'small': '8px',
    'medium': '16px',
    'large': '24px',
  },
  'padding': {
    '': '16px',
    'small': '8px',
    'medium': '16px',
    'large': '24px',
  },
};

export const config = {
  size,
  prefixCls,
  prefixComponent,
  token,
  locale: {},
  themes: {} as Record<symbol, any>,
};
export default config;

export const configInjectionKey: InjectionKey<Ref<Partial<Config>>> = Symbol('configInjectionKey');

export type Config = typeof config;
export type Token = typeof token;
