import type { DeepPartialConfig } from '@/defaultConfig';
import { useProvideConfig, useThemes } from '@/hooks';
import { deepMerge } from '@/utils';
import { type App, type Plugin, unref } from 'vue';

function create({ components, themes }: { components?: any[] | Record<string, any>; themes?: Record<symbol, any> }) {
  return (app: App, config: DeepPartialConfig) => {
    const _config = unref(useProvideConfig(deepMerge({ themes }, config), app, true));
    useThemes(_config.themes, app);

    if (components) {
      (Array.isArray(components) ? components : Object.values(components)).forEach((compoent) => {
        app.use(compoent as Plugin, _config);
      });
    }
  };
}

export default create;
