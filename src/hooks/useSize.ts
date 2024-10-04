import type { MaybeRef } from '@/types';
import { type ComponentSize, componentSizes } from '@/constants';
import { computed, unref } from 'vue';
import { useConfig } from './useConfig';

export function useSize(fallback?: MaybeRef< string | undefined>) {
  return computed(() => {
    const size = unref(fallback) || unref(useConfig()).size;
    return componentSizes.includes(size as ComponentSize) ? size as ComponentSize : 'medium';
  });
}

export function useSizeValue(fallback?: MaybeRef<string | undefined>) {
  return componentSizes.includes(unref(fallback) as any) ? undefined : unref(fallback);
}
