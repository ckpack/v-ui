import type { InjectionKey } from 'vue'
// import { inject } from 'vue'

export const NAME = 'VUI'
// 自定义组件前缀
export const COMPONENT_PREFIX = 'V'
export const CLS_PREFIX = `${COMPONENT_PREFIX.toLowerCase()}-`
export const SIZE = 'medium'
export const configProvideInjectKey = Symbol('configProvideInjectKey') as InjectionKey<{
  clsPrefix?: string
  [key: string]: unknown
}>

// export function useGlobalConfig(key: string) {
//   const config = inject(configProvideInjectKey, {})
//   return key ? config[key] : config
// }

// export const getClsPrefix = (componentName = '') => {
//   const prefix = useGlobalConfig('clsPrefix') || CLS_PREFIX
//   return `${prefix}${componentName}`
// }

export const getComponentPrefix = (options: {
  componentPrefix?: string
} = {}) => options.componentPrefix || COMPONENT_PREFIX
