<script setup lang="ts">
import { useCompoents } from './hooks/use-compoents';
const { compoents, name } = useCompoents('form');
</script>

<template>
  <div id="app">
    <input v-model="name">
    <template v-for="(value, key) in compoents" :key="key">
      <h4>{{ key }}</h4>
      <component :is="value" />
    </template>
  </div>
</template>
