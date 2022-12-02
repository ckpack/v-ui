import defaultConfig from '@/defaultConfig';
import type { SFCWithInstall } from '@/types';

export const withInstallComponent = <T extends { name: string }>(main: T, extra: T[] = []): T => {
  (main as SFCWithInstall<T>).install = (app, options = {}) => {
    const namespace = options.namespace || defaultConfig.namespace;
    [main, ...extra].forEach((compoent) => {
      app.component(`${`${namespace[0].toUpperCase()}${namespace.slice(1)}`}${compoent.name}`, compoent);
    });
  };
  return main;
};
