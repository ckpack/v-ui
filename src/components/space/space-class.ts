import { css } from '@emotion/css';
import { useNamespace } from '@/themes';

export const { iv, v } = useNamespace('space');

iv({
  'gap-small': '.6rem',
  'gap-medium': '1rem',
  'gap-large': '2rem',
});

export const useSpace = () => {
  const space = css({
    display: 'flex',
  });
  return {
    space,
  };
};
