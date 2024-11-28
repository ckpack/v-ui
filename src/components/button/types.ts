import type { ComponentSize, ComponentTheme } from '@/constants';

export interface ButtonProps {
  size?: ComponentSize;
  round?: boolean;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  raised?: boolean;
  theme?: ComponentTheme;
}
