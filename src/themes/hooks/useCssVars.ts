import { useCssVars as _useCssVars, getCurrentInstance } from 'vue';
export const useCssVars = (getter: (ctx?: any) => Record<string, string>) => {
  if (getCurrentInstance()) { _useCssVars(getter); }
  else {
    const vars = getter();
    for (const key in vars) {
      document.documentElement.style.setProperty(`--${key}`, vars[key]);
    }
  }
};
