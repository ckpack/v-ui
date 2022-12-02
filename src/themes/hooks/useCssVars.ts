import { useCssVars as _useCssVars, getCurrentInstance } from 'vue';
export const useCssVars = (vars: Record<string, string>) => {
  if (getCurrentInstance()) { _useCssVars(() => vars); }
  else {
    for (const key in vars) {
      document.documentElement.style.setProperty(`--${key}`, vars[key]);
    }
  }
};
