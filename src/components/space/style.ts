import { css } from '@emotion/css';
import { computed } from 'vue';
import { useNamespace } from '@/themes';

export const { b, iv, v } = useNamespace('space');

iv({
  'gap-small': '.6rem',
  'gap-medium': '1rem',
  'gap-large': '2rem',
});

const base = css({
  display: 'flex',
});

export const useSpace = () => {
  const space = computed(() => [
    base,
    b(),
  ]);
  return {
    space,
  };
};
