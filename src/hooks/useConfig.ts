import type { Config } from '@/defaultConfig';
import type { App, Ref } from 'vue';
import defaultConfig, { configInjectionKey } from '@/defaultConfig';
import { deepMerge } from '@/utils';
import { computed, getCurrentInstance, inject, provide, ref } from 'vue';

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
