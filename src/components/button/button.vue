<script setup lang="ts">
import type { buttonThemes } from './button';
import { useButton } from './button-class';

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

const { button } = useButton({ props });
</script>

<template>
  <button :class="button">
    <slot />
  </button>
</template>
