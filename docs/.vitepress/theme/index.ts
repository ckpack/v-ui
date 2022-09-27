import DefaultTheme from 'vitepress/theme';
import '@ckpack/v-ui/dist/index.css';
import { COMPOENT_PREFIX } from '../mdPlugin';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import DemoBlock from './DemoBlock.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component(COMPOENT_PREFIX, DemoBlock);
  },
};
