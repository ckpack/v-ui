import type { App, Plugin } from 'vue';
import { deepMerge } from '@/utils';
import { useConfig } from '@/hooks';
import { type Config, configInjectionKey } from '@/defaultConfig';

function create({ components, themes }: { components?: any[] | Record<string, any>; themes?: Record<symbol, any> }) {
  return (app: App, config: Config) => {
    const mergeConfig = useConfig(deepMerge(config, { themes }));
    app.provide(configInjectionKey, mergeConfig);

    const { themes: _themes } = mergeConfig;
    if (_themes) {
      Object.getOwnPropertySymbols(_themes).forEach((key) => {
        app.provide(key, _themes[key](mergeConfig));
      });
    }

    if (components) {
      (Array.isArray(components) ? components : Object.values(components)).forEach((compoent) => {
        app.use(compoent as Plugin, mergeConfig);
      });
    }
  };
}

export default create;
