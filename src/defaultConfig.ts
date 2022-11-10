import type { InjectionKey } from 'vue';

export const NAME = 'VUI';
// 自定义组件前缀
export const COMPONENT_PREFIX = 'V';
export const CLS_PREFIX = COMPONENT_PREFIX.toLowerCase();
export const CSS_VAR_PREFIX = COMPONENT_PREFIX.toLowerCase();
export const SIZE = 'medium';
export const configProvideInjectKey = Symbol('configProvideInjectKey') as InjectionKey<{
  size?: string
}>;
