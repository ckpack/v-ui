<script setup lang="ts">
import type { Token } from '@/defaultConfig';
import { useProvideConfig } from '@/hooks';
import ThemeProvider from '@/components/theme-provider';
import type { ComponentSize } from '@/constants';

defineOptions({
  name: 'ConfigProvider',
});

const props = defineProps<{
  size?: ComponentSize
  prefixCls?: string
  token?: Token
  themes?: Record<symbol, any>
  locale?: any
}>();

useProvideConfig(props);
</script>

<template>
  <ThemeProvider>
    <slot />
  </ThemeProvider>
</template>
