<script setup lang="ts">
import { inject, provide } from 'vue';
import defaultConfig, { configInjectionKey } from '@/defaultConfig';
import ThemeProvider from '@/components/theme-provider';
import { filterUndefinedKey } from '@/utils';

const props = withDefaults(defineProps<{
  size?: string
  namespace?: string
  token?: any
  themes?: Record<symbol, any>
  locale?: any
}>(), {});

defineOptions({
  name: 'ConfigProvider',
});

const provideConfig = { ...defaultConfig, ...filterUndefinedKey(inject(configInjectionKey)), ...filterUndefinedKey(props) };
provide(configInjectionKey, provideConfig);
</script>

<template>
  <ThemeProvider :themes="provideConfig.themes">
    <slot />
  </ThemeProvider>
</template>
