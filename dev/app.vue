<script setup lang="ts">
import { computed, ref } from 'vue';
import CaseComponents from './components-demos';
import { themes } from '@/index';

const showName = ref('');

const caseComponents = computed(() => {
  return Object.keys(CaseComponents)
    .filter((name: string) => name.toLowerCase().includes(showName.value.toLowerCase()));
});
</script>

<template>
  <div id="app">
    <input v-model="showName">
    <VConfigProvider :themes="themes">
      <div class="content">
        <template v-for="(name) in caseComponents" :key="name">
          <h4>{{ name }}</h4>
          <component :is="CaseComponents[name]" />
        </template>
      </div>
    </VConfigProvider>
  </div>
</template>
