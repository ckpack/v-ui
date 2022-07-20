<script setup lang="ts">
defineOptions({
  name: 'Button',
})
</script>

<template>
  <button
    class="btn"
  >
    <slot />
  </button>
</template>

<style>
.btn {
  @apply px-4 py-1 border rounded inline-block bg-green-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50;
}
</style>
