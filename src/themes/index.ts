import { buttonInjectionKey, buttonTheme } from './components/button';
import { baseInjectionKey, baseTheme } from './components/base';
import { spaceInjectionKey, spaceTheme } from './components/space';
import { iconInjectionKey, iconTheme } from './components/icon';

export const themes = {
  [baseInjectionKey as symbol]: baseTheme,
  [buttonInjectionKey as symbol]: buttonTheme,
  [spaceInjectionKey as symbol]: spaceTheme,
  [iconInjectionKey as symbol]: iconTheme,
} as Record<symbol, any>;

export * from './components/button';
export * from './components/base';
export * from './components/space';
export * from './components/icon';
