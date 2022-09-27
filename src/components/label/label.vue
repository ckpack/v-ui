<script setup lang="ts">
import { useNamespace } from '@/hooks';

defineProps({
  label: String,
});

defineOptions({
  name: 'Label',
});

const ns = useNamespace('label');
</script>

<template>
  <span :class="ns.b()">
    {{ label }}
  </span>
</template>
