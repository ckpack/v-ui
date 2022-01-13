import { getComponentPrefix } from '../defaultConfig';
import type { SFCWithInstall } from './types';

export const withInstallComponent = <T extends { name: string }>(main:T, extra: T[] = []):T => {
  (main as SFCWithInstall<T>).install = (app, options = {}) => {
    const componentPrefix = getComponentPrefix(options);
    [main, ...extra].forEach((compoent) => {
      app.component(`${componentPrefix}${compoent.name}`, compoent);
    });
  };
  return main;
};
