<script setup lang="ts">
import type { buttonThemes } from './button';
import { useNamespace } from '@/hooks';

const props = withDefaults(defineProps<{
  round?: boolean
  theme?: typeof buttonThemes[number]
}>(), {
  theme: 'default',
});

defineOptions({
  name: 'Button',
});

const ns = useNamespace('button');
</script>

<template>
  <button :class="[ns.b(), ns.is('round', round), ns.m('theme', theme)]">
    <slot />
  </button>
</template>
