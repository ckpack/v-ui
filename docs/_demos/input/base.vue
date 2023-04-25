<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('Hello Wrold');
</script>

<template>
  {{ msg }}
  <VInput v-model="msg" />
</template>
