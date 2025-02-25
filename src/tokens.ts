import type { FormItemProps, FormProps } from '@/components/';
import type { RuleItem, ValidateError, ValidateOption } from 'async-validator';
import type { InjectionKey, SetupContext } from 'vue';

export type trigger = 'blur' | 'change';

export type Validate = (trigger?: trigger, options?: ValidateOption) => Promise<ValidateError[] | undefined>;

export type Arrayable<T> = T | T[];

export interface FormItemRule extends RuleItem {
  trigger?: trigger;
}
export type FormItemRules = Arrayable<FormItemRule>;
export type FormRules = Record<string, FormItemRules>;

export type FormContext = FormProps & {
  emit: SetupContext<['validate']>['emit'];
  validate: () => void;
  clearValidate: () => void;
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
};
export type FormItemContext = FormItemProps & {
  validationErrors: undefined | ValidateError[];
  validate: Validate;
  clearValidate: () => void;
};
export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey');
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey');
