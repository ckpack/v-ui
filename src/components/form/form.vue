<script setup lang="ts">
import type { FormContext, FormItemContext, FormRules } from '@/tokens';
import { formInjectionKey } from '@/themes';
import { formContextKey } from '@/tokens';
import { computed, inject, provide, reactive, ref, toRefs, unref } from 'vue';

defineOptions({
  name: 'Form',
});

const props = withDefaults(defineProps<{
  labelSuffix?: string
  model?: Record<string, any>
  rules?: FormRules
}>(), {
  labelSuffix: '',
});

const emit = defineEmits(['reset', 'validate']);

const fields = ref<FormItemContext[]>([]);

const validateFieldsError = computed(() => {
  return fields.value.filter(field => !!field.validationErrors).map((field) => {
    return { [field.name as string]: field.validationErrors };
  });
});

const validate: FormContext['validate'] = async () => {
  const _fields = unref(fields.value);
  for (const field of _fields) {
    await field.validate();
  }

  const validateFieldsError = _fields.filter(field => !!field.validationErrors).map((field) => {
    return { [field.name as string]: field.validationErrors };
  });

  emit('validate', validateFieldsError);
};

const clearValidate: FormContext['clearValidate'] = () => {
  for (const field of fields.value) {
    field.clearValidate();
  }
};

const addField: FormContext['addField'] = (field) => {
  fields.value.push(field);
};
const removeField: FormContext['removeField'] = (field) => {
  if (field.name) {
    fields.value.splice(fields.value.indexOf(field), 1);
  }
};

provide(formContextKey, reactive({
  ...toRefs(props),
  validate,
  clearValidate,
  addField,
  removeField,
  emit,
  validateFieldsError,
}));

defineExpose({
  validate,
  clearValidate,
  addField,
  removeField,
});

const IV = inject(formInjectionKey)!;
const formClass = computed(() => {
  const { hashId, ns } = IV;
  return [
    hashId,
    ns.b(),
  ];
});
</script>

<template>
  <form :class="formClass">
    <slot />
  </form>
</template>
