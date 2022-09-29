<script setup lang="ts">
import { useNamespace } from '../../hooks';
import type { buttonThemes } from './button';

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
