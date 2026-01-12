import type { ComponentSize } from '@/constants';
import type { MaybeRef } from '@/types';
import { computed, unref } from 'vue';
import { componentSizes } from '@/constants';
import { useConfig } from './useConfig';

export function useSize(fallback?: MaybeRef<string | undefined>) {
  return computed(() => {
    const size = unref(fallback) || unref(useConfig()).size;
    return componentSizes.includes(size as ComponentSize) ? size as ComponentSize : 'medium';
  });
}

export function useSizeValue(fallback?: MaybeRef<string | undefined>) {
  return componentSizes.includes(unref(fallback) as any) ? undefined : unref(fallback);
}
