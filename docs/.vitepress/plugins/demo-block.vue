<script setup lang="ts">
import { computed, ref } from 'vue';
import ReplWrapper from './repl-wrapper.vue';

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
});

const replWrapperRef = ref();
const description = computed(() => decodeURIComponent(props.description));
const code = computed(() => decodeURIComponent(props.code));
const editLink = computed(() => decodeURIComponent(props.editLink));

const openlink = (url: string) => window.open(url);

function reset() {
  replWrapperRef?.value.setAppFile(decodeURIComponent(props.code));
}
</script>

<template>
  <div class="demo-block">
    <div v-if="description" class="description">
      <slot name="description" :description="description">
        {{ description }}
      </slot>
    </div>
    <div class="control">
      <button
        v-if="editLink"
        class="control-btn"
        @click="reset"
      >
        Reset
      </button>
      <button
        v-if="editLink"
        class="control-btn"
        @click="openlink(editLink)"
      >
        Edit
      </button>
    </div>
    <slot name="code">
      <ReplWrapper ref="replWrapperRef" :code="code" />
    </slot>
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

.demo-block .control {
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  z-index: 9999;
  right: 0;
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
