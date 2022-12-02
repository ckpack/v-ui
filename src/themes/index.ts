import { buttonInjectionKey, buttonStyle } from './styles/button';
import { baseInjectionKey, baseStyle } from './styles/base';

export const themes = {
  [buttonInjectionKey as symbol]: buttonStyle,
  [baseInjectionKey as symbol]: baseStyle,
};

export * as colors from './colors';
export * from './config';
export * from './styles/button';
export * from './styles/base';
export * from './hooks/useColors';
export * from './hooks/useNamespace';
export * from './hooks/useThemes';
