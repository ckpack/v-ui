<script setup lang="ts">
import { type StyleValue, computed, inject, useSlots } from 'vue';
import { isBoolean } from '@/utils';
import { componentSizes } from '@/constants';
import { spaceInjectionKey, spaceStyle } from '@/themes';

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

const { hashId, ns } = inject(spaceInjectionKey, () => spaceStyle(), true);

const style = computed(() => {
  const { size, wrap, direction, alignItems, fill } = props;
  return {
    'align-items': alignItems,
    'flex-direction': direction,
    'flex-wrap': isBoolean(wrap) ? (wrap ? 'wrap' : 'nowrap') : wrap,
    'gap': componentSizes.includes(size as any) ? ns.vv('gap', size) : size,
    'width': fill ? '100%' : '',
  } as StyleValue;
});
</script>

<template>
  <div :class="[hashId, ns.b()]" :style="style">
    <component :is="() => slots.default()" />
  </div>
</template>
