import { buttonInjectionKey, buttonTheme } from './components/button';
import { baseInjectionKey, baseTheme } from './components/base';
import { spaceInjectionKey, spaceTheme } from './components/space';

export const themes = {
  [baseInjectionKey as symbol]: baseTheme,
  [buttonInjectionKey as symbol]: buttonTheme,
  [spaceInjectionKey as symbol]: spaceTheme,
} as Record<symbol, any>;

export * from './components/button';
export * from './components/base';
export * from './components/space';
