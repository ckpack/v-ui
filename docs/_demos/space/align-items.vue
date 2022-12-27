<script setup lang="ts">
const alignItems = ['stretch', 'center', 'start', 'end', 'normal'];
</script>

<template>
  <template v-for="align in alignItems" :key="align">
    <v-space :align-items="align">
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
      <div :style="{ height: '60px', border: '1px solid red', background: 'gray' }">
        {{ align }}
      </div>
    </v-space>
    <hr>
  </template>
</template>
