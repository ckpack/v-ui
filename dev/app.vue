<script setup lang="ts">
import CaseComponents from './components';
</script>

<template>
  <div id="app">
    <v-config-provider>
      <template v-for="(caseComponent, name) in CaseComponents" :key="name">
        <h4>{{ name }}</h4>
        <component :is="caseComponent" />
      </template>
    </v-config-provider>
  </div>
</template>
