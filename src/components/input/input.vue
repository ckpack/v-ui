<script setup lang="ts">
import { computed, inject } from 'vue';
import { inputInjectionKey } from '@/themes';

defineProps({});

defineOptions({
  name: 'Input',
});

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
    input
  </div>
</template>
