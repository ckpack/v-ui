import { computed, unref } from 'vue';
import { useConfig } from './useConfig';
import type { MaybeRef } from '@/types';
import { type ComponentSize, componentSizes } from '@/constants';

export const useSize = (fallback?: MaybeRef<ComponentSize>) => {
  const config = useConfig();
  return computed(() => {
    const size = unref(fallback) || config.value.size;
    return componentSizes.includes(size) ? size : 'medium';
  });
};
