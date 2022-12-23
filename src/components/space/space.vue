<script setup lang="ts">
import { type StyleValue, computed, inject, useSlots } from 'vue';
import { isBoolean } from '@/utils';
import { componentSizes } from '@/constants';
import { spaceInjectionKey } from '@/themes';

const props = withDefaults(defineProps<{
  alignItems?: 'stretch' | 'center' | 'start' | 'end' | 'normal'
  direction?: 'row' | 'column'
  size?: string | number
  wrap?: boolean
  fill?: boolean
}>(), {
  alignItems: 'normal',
  direction: 'row',
  size: 'medium',
  wrap: false,
  fill: false,
});

defineOptions({
  name: 'Space',
  inheritAttrs: false,
});

const slots: any = useSlots();

const SI = inject(spaceInjectionKey);

const spaceClass = SI && computed(() => {
  const { hashId, ns } = SI;
  return [
    hashId,
    ns.b(),
  ];
});

const spaceTheme = computed(() => {
  const { size, wrap, direction, alignItems, fill } = props;
  return {
    'align-items': alignItems,
    'flex-direction': fill ? 'column' : direction,
    'flex-wrap': isBoolean(wrap) ? (wrap ? 'wrap' : 'nowrap') : wrap,
    'gap': componentSizes.includes(size as any) ? SI?.ns.vv('gap', size) : size,
    'width': fill ? '100%' : '',
  } as StyleValue;
});
</script>

<template>
  <div :class="spaceClass" :style="spaceTheme">
    <component :is="() => slots.default()" />
  </div>
</template>
