<script setup lang="ts">
import type { StyleValue } from 'vue';
import { iconInjectionKey } from '@/themes';
import { computed, inject } from 'vue';

defineOptions({
  name: 'Icon',
});

const props = withDefaults(defineProps<{
  size?: string;
  svg: string;
  spin?: boolean;
  rotate?: number;
  color?: string;
  hoverColor?: string;
  cursor?: string;
}>(), {
  color: 'inherit',
  rotate: 0,
});

const IV = inject(iconInjectionKey)!;

const iconClass = computed(() => {
  const { hashId, ns } = IV;
  return [
    hashId,
    ns.b(),
    ns.is('spin', props.spin),
  ];
});

const iconStyle = computed(() => {
  const { ns } = IV;
  const { size, rotate, color, cursor, hoverColor } = props;
  return {
    [ns.v('color')]: color,
    [ns.v('color', 'hover')]: hoverColor || color,
    [ns.v('font-size')]: size,
    [ns.v('cursor')]: cursor,
    transform: `rotate(${rotate}deg)`,
  } as StyleValue;
});

const svgHtml = computed(() => {
  const svg = props.svg;
  return svg.startsWith('<svg')
    ? svg
    : `<svg class="icon" aria-hidden="true"><use xlink:href="#${svg}"></use></svg>`;
});
</script>

<template>
  <i :class="iconClass" :style="iconStyle" v-html="svgHtml" />
</template>
