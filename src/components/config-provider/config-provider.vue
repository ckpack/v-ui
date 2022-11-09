<script setup lang="ts">
import { provide, reactive } from 'vue';
import { CLS_PREFIX, configProvideInjectKey } from '@/defaultConfig';

const props = withDefaults(defineProps<{
  clsPrefix?: string
}>(), {
  clsPrefix: CLS_PREFIX,
});

provide(configProvideInjectKey, reactive(props));
</script>

<template>
  <div class="test">
    <slot />
  </div>
</template>
