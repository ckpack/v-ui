import { prefixComponent } from '@/defaultConfig';
import type { SFCWithInstall } from '@/types';

export const withInstallComponent = <T extends { name: string }, E extends { name: string }>(main: T, extra: E[] = []): T => {
  (main as SFCWithInstall<T>).install = (app, options = {}) => {
    const ns = options.prefixComponent || prefixComponent;
    [main, ...extra].forEach((compoent) => {
      app.component(`${`${ns[0].toUpperCase()}${ns.slice(1)}`}${compoent.name}`, compoent);
    });
  };
  return main;
};

export const withNoopInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = () => undefined;
  return component as SFCWithInstall<T>;
};
