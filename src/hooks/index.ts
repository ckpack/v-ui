import { inject, unref } from 'vue';
import { CLS_PREFIX, configProvideInjectKey } from '@/defaultConfig';

const statePrefix = 'is-';

export function useGlobalConfig(key: string) {
  const config = inject(configProvideInjectKey, {});
  return key ? config[key] : config;
}

export const getClsPrefix = (componentName = '') => {
  const prefix = useGlobalConfig('clsPrefix') || CLS_PREFIX;
  return `${prefix}${componentName}`;
};

export const useNamespace = (block: string) => {
  const namespace = useGlobalConfig('clsPrefix') || CLS_PREFIX;
  const b = () => `${unref(namespace)}${block}`;
  const is = (name: string, state?: boolean) => {
    return state ? `${b()}-${statePrefix}${name}` : '';
  };
  const m = (type: string, modifier?: string) => {
    return modifier ? `${b()}-${type}-${modifier}` : '';
  };

  return {
    namespace,
    is,
    b,
    m,
  };
};
