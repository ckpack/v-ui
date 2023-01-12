<script setup lang="ts">
const svgs = [
  'icon-shanchu',
  'icon-home',
  'icon-logo',
];
</script>

<template>
  <v-space direction="column">
    <v-space wrap>
      <v-icon v-for="svg in svgs" :key="svg" :svg="svg" />
    </v-space>
  </v-space>
</template>
