import type { App, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;
export type PluginInstallFunction = (app: App, ...options: unknown[]) => unknown;
