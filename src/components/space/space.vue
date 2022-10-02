<script setup lang="ts">
import { type StyleValue, computed, toRefs, useSlots } from 'vue';
import { useNamespace } from '@/hooks';
import { isBoolean } from '@/utils';

const props = withDefaults(defineProps<{
  alignItems?: 'stretch' | 'center' | 'start' | 'end' | 'normal'
  direction?: 'row' | 'column'
  size?: string | number
  wrap?: boolean
  fill?: boolean
}>(), {
  alignItems: 'normal',
  direction: 'row',
  size: 'default',
  wrap: false,
  fill: false,
});

const SIZE_MAP: Record<string, any> = {
  small: '.6rem',
  default: '1rem',
  large: '2rem',
};

defineOptions({
  name: 'Space',
});

const ns = useNamespace('space');

const slots = useSlots();
const defaultSlots = slots.default ? slots.default() : [];

const spaceStyle = computed(() => {
  const { size, wrap, direction, alignItems, fill } = props;
  return {
    'align-items': alignItems,
    'flex-direction': direction,
    'flex-wrap': isBoolean(wrap) ? wrap && 'wrap' : wrap,
    'gap': SIZE_MAP[size] || size,
    'width': fill ? '100%' : '',
  } as StyleValue;
});
</script>

<template>
  <div :class="ns.b()" :style="spaceStyle">
    <template v-for="(c, key) in defaultSlots" :key="c.key || key">
      <component :is="c" />
    </template>
  </div>
</template>
