<script setup lang="ts">
import type { StyleValue } from 'vue';
import { computed, inject } from 'vue';
import { useSize, useSizeValue } from '@/hooks';
import { spaceInjectionKey } from '@/themes';
import { isBoolean } from '@/utils';

defineOptions({
  name: 'Space',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  alignItems?: 'stretch' | 'center' | 'start' | 'end' | 'normal';
  direction?: 'row' | 'column';
  size?: string;
  wrap?: boolean;
  fill?: boolean;
}>(), {
  alignItems: 'normal',
  direction: 'row',
  wrap: false,
  fill: false,
});

const IV = inject(spaceInjectionKey)!;

const spaceClass = computed(() => {
  const { hashId, ns } = IV;

  const { size } = props;
  return [
    hashId,
    ns.b(),
    ns.m('size', useSize(size)),
  ];
});

const spaceStyle = computed(() => {
  const { ns } = IV;
  const { size, wrap, direction, alignItems, fill } = props;
  return {
    [ns.v('gap-size')]: useSizeValue(size),
    'align-items': alignItems,
    'flex-direction': fill ? 'column' : direction,
    'flex-wrap': isBoolean(wrap) ? (wrap ? 'wrap' : 'nowrap') : wrap,
    'width': fill ? '100%' : '',
  } as StyleValue;
});
</script>

<template>
  <div :class="spaceClass" :style="spaceStyle">
    <slot />
  </div>
</template>
