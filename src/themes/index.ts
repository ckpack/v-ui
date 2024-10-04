import { baseInjectionKey, baseTheme } from './components/base';
import { buttonInjectionKey, buttonTheme } from './components/button';
import { formInjectionKey, formTheme } from './components/form';
import { formItemInjectionKey, formItemTheme } from './components/form-item';
import { iconInjectionKey, iconTheme } from './components/icon';
import { inputInjectionKey, inputTheme } from './components/input';
import { spaceInjectionKey, spaceTheme } from './components/space';

export const themes = {
  [baseInjectionKey as symbol]: baseTheme,
  [buttonInjectionKey as symbol]: buttonTheme,
  [spaceInjectionKey as symbol]: spaceTheme,
  [iconInjectionKey as symbol]: iconTheme,
  [formInjectionKey as symbol]: formTheme,
  [formItemInjectionKey as symbol]: formItemTheme,
  [inputInjectionKey as symbol]: inputTheme,
} as Record<symbol, any>;

export * from './components/base';
export * from './components/button';
export * from './components/form';
export * from './components/form-item';
export * from './components/icon';
export * from './components/input';
export * from './components/space';
