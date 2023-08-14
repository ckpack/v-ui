<script setup>
import { computed, ref } from 'vue';
import { ReplStore } from '@vue/repl';

const props = defineProps({
  description: {
    type: String,
    default: '',
  },
  code: {
    type: String,
    default: '',
  },
  editLink: {
    type: String,
    default: '',
  },
  demo: {
    type: Object,
    default: () => {},
  },
});

const isShowCode = ref(false);
const description = computed(() => decodeURIComponent(props.description));
const code = computed(() => decodeURIComponent(props.code));
const editLink = computed(() => decodeURIComponent(props.editLink));

const openlink = url => window.open(url);

const store = new ReplStore();
store.setFiles({ 'src/App.vue': decodeURIComponent(code.value) });
</script>

<template>
  <div class="demo-block">
    <div v-if="description" class="description">
      <slot name="description" :description="description">
        {{ description }}
      </slot>
    </div>
    <div v-if="demo" class="preview">
      <slot name="preview" :compoent="demo">
        <component :is="demo" />
      </slot>
    </div>
    <div class="control-btn-wrapper">
      <button
        class="control-btn" :style="{
          color: isShowCode ? 'var(--vp-c-brand)' : 'var(--vp-c-text-2)',
        }" @click="isShowCode = !isShowCode"
      >
        {{ '</>' }}
      </button>
      <button v-if="editLink" class="control-btn" @click="openlink(editLink)">
        Edit
      </button>
      <button class="control-btn" @click="openlink(`/v-ui/play${store.serialize()}`)">
        Playground
      </button>
    </div>

    <div v-show="isShowCode && code">
      <slot name="code">
        <pre>
          <code>{{ code }}</code>
        </pre>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.demo-block {
  border: 1px solid var(--vp-c-divider-light);
}

.demo-block .description {
  font-size: 1rem;
  font-weight: bolder;
}

.demo-block .control-btn-wrapper {
  text-align: right;
}

.demo-block .control-btn {
  color: var(--vp-c-text-2);
  height: 32px;
  padding: 0 16px;
  border: none;
}

.demo-block .control-btn:hover {
  color: var(--vp-c-text-1);
}

.demo-block .control-btn-active {
  color: var(--vp-c-brand) !important;
}
</style>
