<script setup lang="ts">
import { computed, inject, watch } from 'vue';
import { inputInjectionKey } from '@/themes';
import { formItemContextKey } from '@/tokens';

defineOptions({
  name: 'Input',
});

const props = defineProps<{
  modelValue?: string | number
}>();

const emits = defineEmits(['update:modelValue', 'input', 'blur']);
const formItemContext = inject(formItemContextKey);

watch(() => props.modelValue, () => {
  formItemContext?.validate('change');
});

function handlerInput(event: Event) {
  emits('input', event);
  emits('update:modelValue', (event?.target as HTMLInputElement)?.value);
}

function handlerBlur(event: Event) {
  emits('blur', event);
  formItemContext?.validate('blur');
}

const IV = inject(inputInjectionKey)!;
const inputClass = computed(() => {
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
