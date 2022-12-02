import type { InjectionKey } from 'vue';

export const NAME = 'VUI';
// 自定义组件前缀

export const config = {
  size: 'medium',
  namespace: 'v',
  token: {},
  themes: {},
  locale: {},
};

export const configInjectionKey = Symbol('configInjectionKey') as InjectionKey<Partial<typeof config>>;

export default config;

