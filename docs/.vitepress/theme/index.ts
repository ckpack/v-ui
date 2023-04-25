/* eslint-disable @typescript-eslint/ban-ts-comment */
import DefaultTheme from 'vitepress/theme';
import './index.css';

// @ts-expect-error
import VUI from '@/index';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VUI);
  },
};
