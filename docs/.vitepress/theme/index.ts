import VUI from '@/index';
import DefaultTheme from 'vitepress/theme';

import './index.css';

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    app.use(VUI);
    if (!import.meta.env.SSR) {
      const ReplWrapper = (await import('../plugins/repl-wrapper.vue')).default;
      app.component('ReplWrapper', ReplWrapper);
    }
  },
};
