<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, provide, reactive, ref, toRefs, unref } from 'vue';
import Schema, { type ValidateError } from 'async-validator';
import { formItemInjectionKey } from '@/themes';
import type { FormItemContext, FormItemRules, Validate, trigger } from '@/tokens';
import { formContextKey, formItemContextKey } from '@/tokens';
import { toArray } from '@/utils';

const props = withDefaults(defineProps<{
  label?: string
  for?: string
  name?: string
  help?: string
  status?: string
  rules?: FormItemRules
  validator?: Function
  error?: string
  required?: boolean
  labelWidth?: string
  showErrorMessage?: boolean
  showRequireMark?: boolean
}>(), {
  label: '',
  required: undefined,
  showErrorMessage: true,
  showRequireMark: true,
});

defineOptions({
  name: 'FormItem',
});

const formContext = inject(formContextKey);

const currentLabel = computed(() => {
  return props.label ? `${props.label}${formContext?.labelSuffix || ''}` : '';
});

const itemRules = computed(() => {
  const { name, required } = props;
  const formContextRules = name ? (formContext?.rules || {})[name] : [];
  const rules = [...toArray(formContextRules), ...toArray(props.rules)];

  if (required !== undefined) {
    return rules.length
      ? rules.map((rule) => {
        return { ...rule, required };
      })
      : [{ required }];
  }
  return rules;
});

function getFilteredRules(trigger?: trigger) {
  const rules = itemRules.value;
  return rules.filter((rule) => {
    if (!rule.trigger || !trigger) { return true; }
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger);
    }
    return rule.trigger === trigger;
  });
}

const isRequired = computed(() => itemRules.value.some(rule => rule.required));

const validationErrors = ref<undefined | ValidateError[]>();

const validate: Validate = async (trigger, options = {}) => {
  const { name } = props;
  if (!name) { return undefined; }

  const value = (formContext?.model || {})[name];

  const validator = new Schema({ [name]: getFilteredRules(trigger) });

  try {
    await validator.validate({ [name]: value }, options);
    validationErrors.value = undefined;
  }
  catch ({ errors, fields }: any) {
    validationErrors.value = errors as ValidateError[];
  }

  // formContext?.emit('validate', name, validationErrors);
  return unref(validationErrors);
};

function clearValidate() {
  validationErrors.value = undefined;
}

const context: FormItemContext = reactive({
  ...toRefs(props),
  validationErrors,
  validate,
  clearValidate,
});

provide(formItemContextKey, context);

onMounted(() => {
  if (props.name) {
    formContext?.addField(context);
  }
});
onUnmounted(() => {
  formContext?.removeField(context);
});

defineExpose({
  validate,
  clearValidate,
});

const IV = inject(formItemInjectionKey)!;
const formClass = computed(() => {
  const { hashId, ns } = IV;
  return [
    hashId,
    ns.b(),
  ];
});
</script>

<template>
  <div :class="formClass">
    <span v-if="showRequireMark && isRequired" style="color: red">*</span>
    <label v-if="currentLabel">{{ currentLabel }}</label>
    <slot />
    <slot name="help">
      <div v-if="help">
        {{ help }}
      </div>
    </slot>
    <slot name="error">
      <div v-if="showErrorMessage && validationErrors" style="color: red">
        {{ error || validationErrors[0].message }}
      </div>
    </slot>
  </div>
</template>
