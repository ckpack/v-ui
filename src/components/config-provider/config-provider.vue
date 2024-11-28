<script setup lang="ts">
import type { ComponentSize } from '@/constants';
import type { Token } from '@/defaultConfig';
import ThemeProvider from '@/components/theme-provider';
import { useProvideConfig } from '@/hooks';

defineOptions({
  name: 'ConfigProvider',
});

const props = defineProps<{
  size?: ComponentSize;
  prefixCls?: string;
  token?: Token;
  themes?: Record<symbol, any>;
  locale?: any;
}>();

useProvideConfig(props);
</script>

<template>
  <ThemeProvider>
    <slot />
  </ThemeProvider>
</template>
