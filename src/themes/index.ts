import { buttonInjectionKey, buttonTheme } from './components/button';
import { baseInjectionKey, baseTheme } from './components/base';
import { spaceInjectionKey, spaceTheme } from './components/space';
import { iconInjectionKey, iconTheme } from './components/icon';
import { formInjectionKey, formTheme } from './components/form';
import { formItemInjectionKey, formItemTheme } from './components/form-item';
import { inputInjectionKey, inputTheme } from './components/input';

export const themes = {
  [baseInjectionKey as symbol]: baseTheme,
  [buttonInjectionKey as symbol]: buttonTheme,
  [spaceInjectionKey as symbol]: spaceTheme,
  [iconInjectionKey as symbol]: iconTheme,
  [formInjectionKey as symbol]: formTheme,
  [formItemInjectionKey as symbol]: formItemTheme,
  [inputInjectionKey as symbol]: inputTheme,
} as Record<symbol, any>;

export * from './components/button';
export * from './components/base';
export * from './components/space';
export * from './components/icon';
export * from './components/form';
export * from './components/form-item';
export * from './components/input';
