<script setup lang="ts">
import { computed, ref } from 'vue';

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
  compoent: Object,
});

const isShowCode = ref(false);

const description = computed(() => decodeURIComponent(props.description));
const code = computed(() => decodeURIComponent(props.code));

const openlink = (url: string) => window.open(url);
</script>

<template>
  <div class="demo-block">
    <div class="description">
      <slot name="description" :description="description">
        {{ description }}
      </slot>
    </div>
    <div class="preview">
      <slot name="preview" :compoent="compoent">
        <component :is="compoent" />
      </slot>
    </div>
    <div class="control">
      <button
        class="control-btn"
        @click="isShowCode = !isShowCode"
      >
        {{ !isShowCode ? 'Code' : 'Hide' }}
      </button>
      <button
        v-if="editLink"
        class="control-btn"
        @click="openlink(editLink)"
      >
        Edit
      </button>
    </div>
    <div
      v-show="isShowCode"
      class="code"
    >
      <slot name="code" :code="code">
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
  padding: 12px;
  word-wrap: break-word;
}

.demo-block .description {
  font-size: 1rem;
  font-weight: bolder;
  padding-bottom: 12px;
}

.demo-block .preview {
  overflow: auto;
}

.demo-block .control {
  display: flex;
  flex-direction: row-reverse;
}

.demo-block .control-btn {
  cursor: pointer;
  padding: 4px;
  width: 4rem;
  border: none;
}
</style>
