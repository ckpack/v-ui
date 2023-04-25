<script setup lang="ts">
import { ref } from 'vue';

const size = ref('medium');

function handlerClick() {
  size.value = size.value === 'medium' ? 'large' : 'medium';
}
</script>

<template>
  <v-config-provider
    :size="size"
    prefix-cls="v"
    :token="{
      color: {
        primary: '#14C9C9',
      },
    }"
  >
    <v-button theme="primary" @click="handlerClick">
      Button
    </v-button>
  </v-config-provider>
</template>
