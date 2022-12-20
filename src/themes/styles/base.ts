import type { InjectionKey } from 'vue';
import { useConfig, useNamespace } from '@/hooks';
import { flattenObj, generateColors } from '@/utils';
import type { Config } from '@/defaultConfig';

export const baseStyle = (config: Config) => {
  const ns = useNamespace('', config);
  const { token } = useConfig(config);
  const cssVars = flattenObj({ ...token, color: generateColors(token.color) });
  ns.iv(cssVars);
};

export const baseInjectionKey = Symbol('baseInjectionKey') as InjectionKey<ReturnType<typeof baseStyle>>;
