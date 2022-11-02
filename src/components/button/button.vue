<script setup lang="ts">
import type { buttonThemes } from './button';
import { button } from './button-class';
// import { useNamespace } from '@/hooks';
const props = withDefaults(defineProps<{
  round?: boolean
  disabled?: boolean
  theme?: typeof buttonThemes[number]
}>(), {
  theme: 'default',
});

defineOptions({
  name: 'Button',
});

// const ns = useNamespace('button');

// const buttonClass = [
//   ns.b(),
//   ns.is('round', props.round),
//   ns.is('disabled', props.disabled),
//   ns.m('theme', props.theme),
// ];
</script>

<template>
  {{ button }}
  <button :class="button" :disabled="props.disabled">
    <slot />
  </button>
</template>
