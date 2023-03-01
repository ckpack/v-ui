<script setup lang="ts">
import { computed, inject } from 'vue';
import { inputInjectionKey } from '@/themes';
import { formItemContextKey } from '@/tokens';

defineProps<{
  modelValue?: string | number
}>();

const emits = defineEmits(['update:modelValue', 'input', 'blur']);

const formItemContext = inject(formItemContextKey);

defineOptions({
  name: 'Input',
});

const handlerInput = (event: Event) => {
  formItemContext?.validate('change');
  emits('input', event);
  emits('update:modelValue', (event?.target as HTMLInputElement)?.value);
};

const handlerBlur = (event: Event) => {
  formItemContext?.validate('blur');
  emits('blur', event);
};

const IV = inject(inputInjectionKey);
const inputClass = IV && computed(() => {
  const { hashId, ns } = IV;
  return [
    hashId,
    ns.b(),
  ];
});
</script>

<template>
  <div :class="inputClass">
    <input :value="modelValue" @input="handlerInput" @blur="handlerBlur">
  </div>
</template>
