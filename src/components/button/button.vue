<script setup lang="ts">
import { useNamespace } from '@/hooks'

const props = defineProps<{
  round?: boolean
}>()

defineOptions({
  name: 'Button',
})

const ns = useNamespace('button')
</script>

<template>
  <button :class="[ns.b(), ns.is('round', round)]">
    <slot />
  </button>
</template>
