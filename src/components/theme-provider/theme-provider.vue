<script setup lang="ts">
import { useThemes } from '@/hooks';

defineOptions({
  name: 'ThemeProvider',
});

useThemes();
</script>

<template>
  <slot />
</template>
