<script setup lang="ts">
import { inputInjectionKey } from '@/themes';
import { formItemContextKey } from '@/tokens';
import { computed, inject, ref, watch } from 'vue';

defineOptions({
  name: 'Input',
});

const props = defineProps<{
  modelValue?: string | number
}>();

const emits = defineEmits(['update:modelValue', 'input', 'blur', 'focus']);
const formItemContext = inject(formItemContextKey);

const isFocus = ref(false);

watch(() => props.modelValue, () => {
  formItemContext?.validate('change');
});

function handlerInput(event: Event) {
  emits('input', event);
  emits('update:modelValue', (event?.target as HTMLInputElement)?.value);
}

function handlerFocus(event: Event) {
  emits('focus', event);
  isFocus.value = true;
  formItemContext?.validate('blur');
}

function handlerBlur(event: Event) {
  emits('blur', event);
  isFocus.value = false;
  formItemContext?.validate('blur');
}

const IV = inject(inputInjectionKey)!;
const inputClass = computed(() => {
  const { hashId, ns } = IV;
  return [
    hashId,
    ns.b(),
    ns.is('focus', isFocus),
  ];
});
</script>

<template>
  <div :class="inputClass">
    <input :value="modelValue" @input="handlerInput" @blur="handlerBlur" @focus="handlerFocus">
  </div>
</template>
