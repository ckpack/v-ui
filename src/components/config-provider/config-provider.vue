<script setup lang="ts">
import type { Token } from '@/defaultConfig';
import { filterUndefinedKey } from '@/utils';
import { useProvideConfig } from '@/hooks';
import ThemeProvider from '@/components/theme-provider';

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

useProvideConfig(filterUndefinedKey(props));
</script>

<template>
  <ThemeProvider>
    <slot />
  </ThemeProvider>
</template>
