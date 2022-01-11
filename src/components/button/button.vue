<template>
  <button :class="prefix">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getClsPrefix } from '../../defaultConfig';

export default defineComponent({
  name: 'Button',
  setup() {
    const prefix = getClsPrefix('button');
    return {
      prefix,
    };
  },
});
</script>
