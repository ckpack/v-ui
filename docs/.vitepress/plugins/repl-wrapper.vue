<script setup>
import { Repl, useStore, useVueImportMap } from '@vue/repl';
import CodeMirror from '@vue/repl/codemirror-editor';
import { ref, watchEffect } from 'vue';
import '@vue/repl/style.css';

// import Monaco from '@vue/repl/monaco-editor';

function setVH() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
};
window.addEventListener('resize', setVH);
setVH();

const query = new URLSearchParams(location.search);

const defaultSerializedState = 'eNp9kc1uwyAQhF8l4pyYQ26RFfUvh/bQVm2PXFy8cYjxgmBxLUV+92LcuG4V5YZmhuHb5cRurc3aAGzDcoLG6oJgK3CxyNvVZyAyuH2AfRE05XxSBOZ8FmZLphprHK2awmZHbzC2nYYS8WN4wTaLpAzajaxtIevYF9RgCHYgsn7DuSwx3i9Bq9ZlCMTRNnwe56XylE4xJ9jQ2AvsIwF5aXCvqn/vS9NYpcG9WFIG/3IUWpuvp6SRC7A86/IAsr6gH3034r468OBaEGzyqHAV0Gjv3p+hi+fJbEwZdExfMd/AGx0GxjF2F7CM2LNcon1M61RYffhdR4D+PNQAmraR8oLFL72/Mvov7jpbT1vsvwGBTq3o';

const {
  importMap: builtinImportMap,
  vueVersion,
  productionMode,
} = useVueImportMap({});

builtinImportMap.value.imports['@ckpack/v-ui'] = 'https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/dist/v-ui.js';

const store = useStore({
  builtinImportMap,
  vueVersion,
  productionMode,
  // starts on the output pane (mobile only) if the URL has a showOutput query
  showOutput: ref(query.has('showOutput')),
  // starts on a different tab on the output pane if the URL has a outputMode query
  // and default to the "preview" tab
  outputMode: ref(query.get('outputMode') || 'preview'),
}, location.hash.slice(1) || defaultSerializedState);

// persist state to URL hash
watchEffect(() => history.replaceState({}, '', store.serialize()));

const previewOptions = {
  customCode: {
    importCode: 'import VUI from \'@ckpack/v-ui\';',
    useCode: 'app.use(VUI);',
  },
};
</script>

<template>
  <Repl :store="store" :editor="CodeMirror" :clear-console="false" :show-compile-output="true" :preview-options="previewOptions" />
</template>

<style>
.vue-repl {
  height: calc(var(--vh) - var(--vp-nav-height)) !important;
}
</style>
