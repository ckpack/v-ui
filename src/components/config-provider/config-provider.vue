<script setup lang="ts">
import type { Token } from '@/defaultConfig';
import { filterUndefinedKey } from '@/utils';
import { useProvideConfig } from '@/hooks';
import ThemeProvider from '@/components/theme-provider';
import type { ComponentSize } from '@/constants';

const props = withDefaults(defineProps<{
  size?: ComponentSize
  prefixCls?: string
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
