import type { InjectionKey } from 'vue';
import { themes } from '@/themes';

export const NAME = 'VUI';
// 自定义组件前缀

export const size = 'medium';

export const namespace = 'v';

export const token = {
  'control-height': '32px',
  'box-shadow': {
    raised: '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)',
  },
  'font': {
    size: {
      '': '14px',
      'sm': '12px',
      'lg': '16px',
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
      'sm': '4px',
      'lg': '8px',
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
    'lg': '24px',
    'sm': '12px',
  },
  'padding': {
    '': '16px',
    'lg': '24px',
    'sm': '12px',
  },
};

export const config = {
  size,
  namespace,
  token,
  themes,
  locale: {},
};
export default config;

export const configInjectionKey = Symbol('configInjectionKey') as InjectionKey<Partial<Config>>;

export type Config = typeof config;
export type Token = typeof token;
