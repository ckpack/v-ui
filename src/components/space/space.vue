<script setup lang="ts">
import { type StyleValue, computed, inject, useSlots } from 'vue';
import { isBoolean } from '@/utils';
import { componentSizes } from '@/constants';
import { spaceInjectionKey } from '@/themes';
import { useSize } from '@/hooks';

const props = withDefaults(defineProps<{
  alignItems?: 'stretch' | 'center' | 'start' | 'end' | 'normal'
  direction?: 'row' | 'column'
  size?: string
  wrap?: boolean
  fill?: boolean
}>(), {
  alignItems: 'normal',
  direction: 'row',
  wrap: false,
  fill: false,
});

defineOptions({
  name: 'Space',
  inheritAttrs: false,
});

const slots: any = useSlots();

const IV = inject(spaceInjectionKey);

const spaceClass = IV && computed(() => {
  const { hashId, ns } = IV;

  return [
    hashId,
    ns.b(),
    ns.m('size', useSize(props.size as any)),
  ];
});

const spaceStyle = IV && computed(() => {
  const { ns } = IV;
  const { size, wrap, direction, alignItems, fill } = props;
  return {
    [ns.v('gap-size')]: componentSizes.includes(size as any) ? undefined : size,
    'align-items': alignItems,
    'flex-direction': fill ? 'column' : direction,
    'flex-wrap': isBoolean(wrap) ? (wrap ? 'wrap' : 'nowrap') : wrap,
    'width': fill ? '100%' : '',
  } as StyleValue;
});
</script>

<template>
  <div :class="spaceClass" :style="spaceStyle">
    <component :is="() => slots.default()" />
  </div>
</template>
