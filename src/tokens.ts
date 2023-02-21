import type { InjectionKey, SetupContext } from 'vue';
import type { RuleItem, ValidateError } from 'async-validator';
import type { FormItemProps, FormProps } from '@/components/';

export type Arrayable<T> = T | T[];

export interface FormItemRule extends RuleItem {
  trigger?: 'blur' | 'change'
}
export type FormItemRules = Arrayable<FormItemRule>;
export type FormRules = Record< string, FormItemRules>;

export type FormContext = FormProps & {
  emit: SetupContext<['validate']>['emit']
  validate: Function
  clearValidate: Function
  addField: (field: FormItemContext) => void
  removeField: (field: FormItemContext) => void
};
export type FormItemContext = FormItemProps & {
  validationErrors: undefined | ValidateError[]
  validate: Function
  clearValidate: Function
};
export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey');
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey');
