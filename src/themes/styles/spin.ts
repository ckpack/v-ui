import { css, keyframes } from '@emotion/css';

export const spinKeyframes = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const spinAnimation = css({
  animationDuration: '1s',
  animationTimingFunction: 'linear',
  animationDelay: '0s',
  animationIterationCount: 'infinite',
  animationDirection: 'normal',
  animationFillMode: 'none',
  animationPlayState: 'running',
  animationName: spinKeyframes,
});
