<script setup lang="ts">
import { useThemes } from '@/hooks';

const props = withDefaults(defineProps<{
  themes?: Record<symbol, any>
}>(), {
  themes: () => ({}),
});

defineOptions({
  name: 'ThemeProvider',
});

useThemes(props.themes);
</script>

<template>
  <slot />
</template>
