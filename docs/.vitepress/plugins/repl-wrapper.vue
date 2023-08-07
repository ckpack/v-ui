<script setup lang="ts">
import '@vue/repl/style.css';
import { File, Repl, ReplStore } from '@vue/repl';
import Monaco from '@vue/repl/monaco-editor';
import { shallowRef, watch } from 'vue';

const props = defineProps({
  code: {
    type: String,
    default: '<template>\n</template>',
  },
});

const store = shallowRef(new ReplStore());

store.value.setImportMap({
  imports: {
    '@ckpack/v-ui': 'https://cdn.jsdelivr.net/npm/@ckpack/v-ui/dist/v-ui.js',
  },
});

watch(() => props.code, (v) => {
  setAppFile(v);
}, {
  immediate: true,
});

const previewOptions = {
  customCode: {
    importCode: 'import VUI from \'@ckpack/v-ui\';',
    useCode: 'app.use(VUI);',
  },
};

function setAppFile(code: string) {
  if (store.value) {
    store.value.addFile(new File('src/App.vue', code));
  }
}

defineExpose({ setAppFile });
</script>

<template>
  <Repl
    :auto-resize="true"
    :editor="Monaco" :store="store" :preview-options="previewOptions"
    layout="vertical"
    :show-import-map="false"
    :show-compile-output="false"
    :show-ts-config="false"
  />
</template>

<style>
.editor-container {
  .editor {
    min-height: 300px !important;
  }
}
</style>
