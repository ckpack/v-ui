import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';
import { flattenObj, generateColors } from '@/utils';
import { type Config, config as defaultConfig } from '@/defaultConfig';

export const baseStyle = (config: Config) => {
  const _config = { ...defaultConfig, ...config };
  const ns = useNamespace('', _config);
  const token = { ..._config.token, ...{ color: generateColors(_config?.token.color) } };
  const cssVars = flattenObj(token);
  ns.iv(cssVars);
};

export const baseInjectionKey = Symbol('buttonInjectionKey') as InjectionKey<ReturnType<typeof baseStyle>>;
