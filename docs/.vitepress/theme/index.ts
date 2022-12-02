/* eslint-disable @typescript-eslint/ban-ts-comment */
import DefaultTheme from 'vitepress/theme';
import './index.css';
import { DEMO_COMPOENT_PREFIX } from '../mdPlugin';

// @ts-expect-error
import DemoBlock from './demo-block.vue';
// @ts-expect-error
import VUI from '@/index';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component(DEMO_COMPOENT_PREFIX, DemoBlock);
    app.use(VUI);
  },
};
