import { getCurrentInstance, inject } from 'vue';
import { deepMerge } from '@/utils';
import defaultConfig, { type Config, configInjectionKey } from '@/defaultConfig';

export const useConfig = (config?: Config): Config => {
  const _config = deepMerge(defaultConfig, config);

  return getCurrentInstance() ? inject(configInjectionKey, _config) : _config;
};
