<script setup lang="ts">
import CaseComponents from './components-demos';
import { themes } from '@/index';
</script>

<template>
  <div id="app">
    <VConfigProvider :themes="themes">
      <template v-for="(caseComponent, name) in CaseComponents" :key="name">
        <h4>{{ name }}</h4>
        <component :is="caseComponent" />
      </template>
    </VConfigProvider>
  </div>
</template>
