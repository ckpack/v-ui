import type { FormItemRules } from '@/tokens';

export interface FormItemProps {
  label?: string
  for?: string
  name?: string
  help?: string
  status?: string
  rules?: FormItemRules
  validator?: () => void
  error?: string
  required?: boolean
  labelWidth?: string
  showErrorMessage?: boolean
}
