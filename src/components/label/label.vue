<script setup lang="ts">
import { getClsPrefix } from '../../defaultConfig'

defineProps({
  label: String,
})

defineOptions({
  name: 'Label',
})

const className = getClsPrefix('Label')
</script>

<template>
  <div
    class="text-green-700"
    :class="className"
  >
    {{ label }}
  </div>
</template>
