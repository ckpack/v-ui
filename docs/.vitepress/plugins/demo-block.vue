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
  demo: {
    type: Object,
    default: () => {},
  },
});

const isShowCode = ref(false);

const description = computed(() => decodeURIComponent(props.description));
const code = computed(() => decodeURIComponent(props.code));
const editLink = computed(() => decodeURIComponent(props.editLink));

const openlink = (url: string) => window.open(url);
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
    <div class="control">
      <button
        class="control-btn" :class="[{
          'control-btn-active': isShowCode,
        }]"
        @click="isShowCode = !isShowCode"
      >
        {{ '</>' }}
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
      v-show="isShowCode && code"
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
}

.demo-block .description {
  font-size: 1rem;
  font-weight: bolder;
}

.demo-block .preview {
  overflow: auto;
  margin-top: 12px;
  padding: 16px;
}

.demo-block .control {
  display: flex;
  flex-direction: row-reverse;
}

.demo-block .code {
  padding: 16px;
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
