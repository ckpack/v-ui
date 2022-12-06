import type { InjectionKey } from 'vue';

export const NAME = 'VUI';
// 自定义组件前缀

export const config = {
  size: 'medium',
  namespace: 'v',
  token: {
    'control-height': '32px',
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
      text: '#404040',
      white: '#ffffff',
      black: '#000000',
      gray: '#dcdcdc',
      bg: '#ffffff',
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
  },
  themes: {},
  locale: {},
};

export type Config = typeof config;

export const configInjectionKey = Symbol('configInjectionKey') as InjectionKey<Partial<Config>>;

export default config;

