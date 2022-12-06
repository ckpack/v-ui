import { buttonInjectionKey, buttonStyle } from './styles/button';
import { baseInjectionKey, baseStyle } from './styles/base';
import { spaceInjectionKey, spaceStyle } from './styles/space';

export const themes = {
  [baseInjectionKey as symbol]: baseStyle,
  [buttonInjectionKey as symbol]: buttonStyle,
  [spaceInjectionKey as symbol]: spaceStyle,
};

export * from './styles/button';
export * from './styles/base';
export * from './styles/space';

