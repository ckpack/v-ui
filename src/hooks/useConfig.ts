import { type App, type Ref, computed, getCurrentInstance, inject, provide, ref } from 'vue';
import { deepMerge } from '@/utils';
import defaultConfig, { type Config, configInjectionKey } from '@/defaultConfig';

const globalConfig = ref(defaultConfig);

export const useConfig = () => {
  const config = getCurrentInstance() ? inject(configInjectionKey, globalConfig) : globalConfig;
  return config as Ref<Config>;
};

export const useProvideConfig = (config: any, app?: App, global = false) => {
  const oldConfig = useConfig();
  const context = computed(() => {
    return deepMerge(oldConfig, config);
  });

  (app?.provide || provide)(configInjectionKey, context);
  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context as Ref<Config>;
};
