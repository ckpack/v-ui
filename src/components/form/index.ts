import Form from './form.vue';
import FormItem from './form-item.vue';
import { withInstallComponent, withNoopInstall } from '@/utils';

export const VForm = withInstallComponent(Form, [FormItem]);
export const VFormItem = withNoopInstall(FormItem);

export type FormInstance = InstanceType<typeof Form>;
export type FormItemInstance = InstanceType<typeof FormItem>;

export default VForm;

export * from './form';
export * from './form-item';
