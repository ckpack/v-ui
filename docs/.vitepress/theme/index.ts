import DefaultTheme from 'vitepress/theme';
import './index.css';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import VUI from '@/index';

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    app.use(VUI);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (!import.meta.env.SSR) {
      const ReplWrapper = (await import('../plugins/repl-wrapper.vue')).default;
      app.component('ReplWrapper', ReplWrapper);
    }
  },
};
