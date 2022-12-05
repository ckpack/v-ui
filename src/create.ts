import type { App, Plugin } from 'vue';
import defaultConfig, { configInjectionKey } from '@/defaultConfig';
import { baseInjectionKey, baseStyle } from '@/themes';

function create({ components, themes } = { components: {}, themes: { [baseInjectionKey as symbol]: baseStyle } }) {
  return (app: App, config = defaultConfig) => {
    app.provide(configInjectionKey, config);
    // todo: theme 通过 app.provide传递，根据getCurrentInstance使用传参或者hook
    Object.getOwnPropertySymbols(themes).forEach((key) => {
      app.provide(key, themes[key](config));
    });
    (Array.isArray(components) ? components : Object.values(components)).forEach((plugin) => {
      app.use(plugin as Plugin, config);
    });
  };
}

export default create;
