<script setup lang="ts">
import { inject, provide } from 'vue';
import type { Token } from '@/defaultConfig';
import defaultConfig, { configInjectionKey } from '@/defaultConfig';
import ThemeProvider from '@/components/theme-provider';
import { deepMerge } from '@/utils';

const props = withDefaults(defineProps<{
  size?: string
  namespace?: string
  token?: Token
  themes?: Record<symbol, any>
  locale?: any
}>(), {});

defineOptions({
  name: 'ConfigProvider',
});

const provideConfig = deepMerge(deepMerge(defaultConfig, inject(configInjectionKey)), { ...props });
provide(configInjectionKey, provideConfig);
</script>

<template>
  <ThemeProvider :themes="provideConfig.themes">
    <slot />
  </ThemeProvider>
</template>
