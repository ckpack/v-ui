<script setup lang="ts">
import { computed, inject } from 'vue';
import type { buttonThemes } from './button';
import { buttonInjectionKey, buttonStyle } from '@/themes';

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

const { hashId, ns } = inject(buttonInjectionKey, () => buttonStyle(), true);

const buttonClass = computed(() => {
  return [
    hashId,
    ns.b(),
    ns.is('round', props.round),
    ns.is('disabled', props.disabled),
    ns.m('theme', props.theme),
  ];
});
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
