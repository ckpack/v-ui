import type { App, Plugin } from 'vue';
import defaultConfig, { configInjectionKey } from '@/defaultConfig';

function create({ components, themes }: { components?: any[] | Record<string, any>; themes?: Record<symbol, any> }) {
  return (app: App, config = defaultConfig) => {
    app.provide(configInjectionKey, config);
    // todo: theme 通过 app.provide传递，根据getCurrentInstance使用传参或者hook
    if (themes) {
      Object.getOwnPropertySymbols(themes).forEach((key) => {
        app.provide(key, themes[key](config));
      });
    }
    if (components) {
      (Array.isArray(components) ? components : Object.values(components)).forEach((plugin) => {
        app.use(plugin as Plugin, config);
      });
    }
  };
}

export default create;
