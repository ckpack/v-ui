<script setup>
import { ref } from 'vue'

const props = defineProps({
  description: String,
  code: String,
  compoent: Object,
})

const description = decodeURIComponent(props.description)
const code = decodeURIComponent(props.code)

const isShowCode = ref(false)
const copyTip = ref('Copy')
const copyCode = () => {
  copyTip.value = 'Copyed'
  navigator.clipboard.writeText(decodeURIComponent(props.code))
}

const handlerMouseout = () => {
  setTimeout(() => {
    copyTip.value = 'Copy'
  }, 250)
}
</script>

<template>
  <div class="demo-block">
    <div class="description">
      <slot name="description">
        {{ description }}
      </slot>
    </div>
    <div class="preview">
      <slot name="preview">
        <component :is="compoent" />
      </slot>
    </div>
    <div class="control">
      <button
        class="control-btn"
        @click="isShowCode = !isShowCode"
      >
        {{ !isShowCode ? 'Show' : 'Hide' }}
      </button>
      <button
        class="control-btn"
        @click="copyCode"
        @mouseout="handlerMouseout"
      >
        {{ copyTip }}
      </button>
    </div>
    <div
      v-if="isShowCode"
      class="code"
    >
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
  padding: 12px;
  word-wrap: break-word;
}

.description {
  font-size: 1rem;
  font-weight: bolder;
  padding-bottom: 12px;
}
.preview {
  padding: 12px 0;
}

.control {
  display: flex;
  flex-direction: row-reverse;
}

.control-btn {
  cursor: pointer;
  padding: 4px;
  margin: 4px;
  width: 4rem;
  border: none;
  border-radius: 1rem;
  color: var(--vp-c-brand);
}

.control-btn:hover {
  color: var(--vp-c-brand-dark);
}
</style>
