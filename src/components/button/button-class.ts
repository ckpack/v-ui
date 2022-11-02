import { css } from '@emotion/css';
import { computed } from 'vue';

export const button = computed(() => {
  return css({
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    lineHeight: 1,
    borderRadius: '.25em',
  });
});
