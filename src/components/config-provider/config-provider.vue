<template>
  <slot />
</template>
<!-- 改为setup 会抛出类型错误 -->
<!-- <script setup lang="ts">
import { provide, reactive } from 'vue';
import { configProvideInjectKey } from '../../defaultConfig';

const props = defineProps({});
provide(configProvideInjectKey, reactive(props));
</script> -->

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue';
import { configProvideInjectKey, CLS_PREFIX } from '../../defaultConfig';

export default defineComponent({
  name: 'ConfigProvider',
  props: {
    clsPrefix: {
      type: String,
      default: CLS_PREFIX,
    },
  },
  setup(props) {
    provide(configProvideInjectKey, reactive(props));
  },
});
</script>
