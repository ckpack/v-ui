export const componentThemes = ['default',
  'primary',
  'success',
  'error',
  'warning'] as const;
export type ComponentTheme = typeof componentThemes[number];
