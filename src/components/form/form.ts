import type { FormRules } from '@/tokens';

export interface FormProps {
  labelSuffix?: string;
  model?: Record<string, any>;
  rules?: FormRules;
}
