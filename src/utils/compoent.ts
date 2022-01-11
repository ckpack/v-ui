import { getComponentPrefix } from '../defaultConfig';

export const withInstallComponent = (main, extra = {}) => {
  main.install = (app, options = {}) => {
    const componentPrefix = getComponentPrefix(options);
    [main, ...Object.values(extra)].forEach((compoent) => {
      app.component(`${componentPrefix}${compoent.name}`, compoent);
    });
  };
  return main;
};
