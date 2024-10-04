<script setup lang="ts">
import { computed, inject } from 'vue';

// import type { ButtonProps } from './types';
import type { ButtonProps } from '@/components/button/types';
import { useSize } from '@/hooks';
import { buttonInjectionKey } from '@/themes';

defineOptions({
  name: 'Button',
});

const props = withDefaults(defineProps<ButtonProps>(), {
  theme: 'default',
  text: false,
  outlined: false,
  raised: false,
});

const IV = inject(buttonInjectionKey)!;
const buttonClass = computed(() => {
  const { hashId, ns } = IV;
  return [
    hashId,
    ns.b(),
    ns.is('round', props.round),
    ns.is('text', props.text),
    ns.is('outlined', props.outlined),
    ns.is('raised', props.raised),
    ns.is('disabled', props.disabled),
    ns.m('theme', props.theme),
    ns.m('size', useSize(props.size)),
  ];
});
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
