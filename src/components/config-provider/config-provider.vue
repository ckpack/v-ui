<script setup lang="ts">
import { provide, reactive, useCssVars } from 'vue';
import { configProvideInjectKey } from '@/defaultConfig';

const props = withDefaults(defineProps<{
  size?: string
  themes?: Record<string, string>
}>(), {
  themes: () => ({}),
});

defineOptions({
  name: 'ConfigProvider',
});

provide(configProvideInjectKey, reactive(props));

useCssVars(() => props.themes);
</script>

<template>
  <slot />
</template>
