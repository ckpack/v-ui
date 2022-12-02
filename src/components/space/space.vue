<script setup lang="ts">
import { type StyleValue, computed, useSlots } from 'vue';
// import { useSpace, v } from './style';
import { isBoolean } from '@/utils';
import { componentSizes } from '@/constants';

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

// const { space } = useSpace();

// const spaceStyle = computed(() => {
//   const { size, wrap, direction, alignItems, fill } = props;
//   return {
//     'align-items': alignItems,
//     'flex-direction': direction,
//     'flex-wrap': isBoolean(wrap) ? (wrap ? 'wrap' : 'nowrap') : wrap,
//     'gap': componentSizes.includes(size as any) ? v('gap', size) : size,
//     'width': fill ? '100%' : '',
//   } as StyleValue;
// });
</script>

<template>
  <div>
    <component :is="() => slots.default()" />
  </div>
</template>
