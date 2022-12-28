<script setup lang="ts">
import { computed, inject } from 'vue';
import type { buttonThemes } from './button';
import { buttonInjectionKey } from '@/themes';
import { useSize } from '@/hooks';
import type { ComponentSize } from '@/constants';

const props = withDefaults(defineProps<{
  size?: ComponentSize
  round?: boolean
  disabled?: boolean
  text?: boolean
  outlined?: boolean
  raised?: boolean
  theme?: typeof buttonThemes[number]
}>(), {
  theme: 'default',
  text: false,
  outlined: false,
  raised: false,
});

defineOptions({
  name: 'Button',
});

const BI = inject(buttonInjectionKey);
const buttonClass = BI && computed(() => {
  const { hashId, ns } = BI;
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
