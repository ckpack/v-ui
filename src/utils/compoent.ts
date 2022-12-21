import { namespace } from '@/defaultConfig';
import type { SFCWithInstall } from '@/types';

export const withInstallComponent = <T extends { name: string }>(main: T, extra: T[] = []): T => {
  (main as SFCWithInstall<T>).install = (app, options = {}) => {
    const ns = options.namespace || namespace;
    [main, ...extra].forEach((compoent) => {
      app.component(`${`${ns[0].toUpperCase()}${ns.slice(1)}`}${compoent.name}`, compoent);
    });
  };
  return main;
};
