<template>
  <div
    :class="className"
  >
    {{ label }}
  </div>
</template>

<script setup lang="ts">
import { getClsPrefix } from '../../defaultConfig';

defineOptions({
  name: 'Label',
});

const className = getClsPrefix('Label');
defineProps({
  label: String,
});
</script>
