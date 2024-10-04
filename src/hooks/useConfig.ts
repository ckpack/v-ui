import defaultConfig, { type Config, configInjectionKey } from '@/defaultConfig';
import { deepMerge } from '@/utils';
import { type App, computed, getCurrentInstance, inject, provide, type Ref, ref } from 'vue';

const globalConfig = ref(defaultConfig);

export function useConfig() {
  const config = getCurrentInstance() ? inject(configInjectionKey, globalConfig) : globalConfig;
  return config as Ref<Config>;
}

export function useProvideConfig(config: any, app?: App, global = false) {
  const oldConfig = useConfig();
  const context = computed(() => {
    return deepMerge(oldConfig, config);
  });

  (app?.provide as any || provide)(configInjectionKey, context);
  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context as Ref<Config>;
}
