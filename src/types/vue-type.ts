import type { App, Plugin, Ref } from 'vue';

export type SFCWithInstall<T> = T & Plugin;
export type PluginInstallFunction = (app: App, ...options: unknown[]) => unknown;

export type MaybeRef<T> = T | Ref<T>;
