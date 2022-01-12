import DefaultTheme from 'vitepress/theme';
import VUI from '../../../es';
import '../../../dist/index.css';

export default {
  ...DefaultTheme,
  enhanceApp({
    app
  }) {
    app.use(VUI, {
      componentPrefix: 'V',
    });
  }
}