<script setup lang="ts">
import { VConfigProvider } from '@ckpack/v-ui/src';
import CaseComponents from './components-demos';
</script>

<template>
  <div id="app">
    <VConfigProvider cls-prefix="v">
      <template v-for="(caseComponent, name) in CaseComponents" :key="name">
        <h4>{{ name }}</h4>
        <component :is="caseComponent" />
      </template>
    </VConfigProvider>
  </div>
</template>
