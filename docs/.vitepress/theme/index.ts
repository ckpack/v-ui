import DefaultTheme from 'vitepress/theme';
import './index.css';
import * as VUI from '@ckpack/v-ui/src';
import { DEMO_COMPOENT_PREFIX } from '../mdPlugin';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import DemoBlock from './demo-block.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component(DEMO_COMPOENT_PREFIX, DemoBlock);
    app.use(VUI);
  },
};
