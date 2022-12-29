<script setup lang="ts">
import { type StyleValue, computed, inject } from 'vue';
import { iconInjectionKey } from '@/themes';
import type { ComponentSize, ComponentTheme } from '@/constants';
import { useSize, useSizeValue } from '@/hooks';

const props = withDefaults(defineProps<{
  size?: ComponentSize
  theme?: ComponentTheme
  disabled?: boolean
  svg: string
  spin?: boolean
  rotate?: number
  color?: string
  hoverColor?: string
}>(), {
  theme: 'default',
  disabled: false,
  rotate: 0,
});

defineOptions({
  name: 'Icon',
});

const IV = inject(iconInjectionKey);

const iconClass = IV && computed(() => {
  const { hashId, ns } = IV;
  return [
    hashId,
    ns.b(),
    ns.is('disabled', props.disabled),
    ns.is('spin', props.spin),
    ns.m('theme', props.theme),
    ns.m('size', useSize(props.size)),
  ];
});

const iconStyle = IV && computed(() => {
  const { ns } = IV;
  const { size, rotate, color, hoverColor } = props;
  return {
    [ns.v('text-color')]: color,
    [ns.v('text-color', 'hover')]: hoverColor || color,
    [ns.v('font-size')]: useSizeValue(size),
    transform: `rotate(${rotate}deg)`,
  } as StyleValue;
});
</script>

<template>
  <div :class="iconClass" :style="iconStyle" v-html="svg" />
</template>
