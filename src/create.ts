import type { App, Plugin } from 'vue';
import defaultConfig, { configInjectionKey } from '@/defaultConfig';

function create(plugins: unknown[] | { [index: string]: unknown }) {
  return (app: App, config = defaultConfig) => {
    app.provide(configInjectionKey, config);
    // todo: theme 通过 app.provide传递，根据getCurrentInstance使用传参或者hook
    (Array.isArray(plugins) ? plugins : Object.values(plugins)).forEach((plugin) => {
      app.use(plugin as Plugin, config);
    });
  };
}

export default create;
