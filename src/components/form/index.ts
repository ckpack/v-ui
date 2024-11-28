import { withInstallComponent, withNoopInstall } from '@/utils';
import FormItem from './form-item.vue';
import Form from './form.vue';

export const VForm = withInstallComponent(Form, [FormItem]);
export const VFormItem = withNoopInstall(FormItem);

export type FormInstance = InstanceType<typeof Form>;
export type FormItemInstance = InstanceType<typeof FormItem>;

export default VForm;

export * from './form';
export * from './form-item';
