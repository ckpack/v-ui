<template>
  <div :class="prefix">
    {{label}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getClsPrefix } from '../../defaultConfig';

export default defineComponent({
  name: 'Label',
  props: {
    label: [String, Number],
  },
  setup(props) {
    const prefix = getClsPrefix('label');
    return {
      prefix,
      text: props.label,
    };
  },
});
</script>
