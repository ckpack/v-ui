<h1 align="center">@ckpakc/v-ui</h1>

<h4 align="center">
  <a href="https://ckpack.github.io/v-ui/">中文</a>
  |
  <a href="https://ckpack.github.io/v-ui/en/">ENGLISH</a>
</h4>

@ckpack/v-ui is a Vue3.x Component UI library.

## Features

+ Developed based on modern tools such as `Vite`, `Vue3.x`, `TypeScript`
+ Separation of `UI`, `state logic` and `CSS` for components
+ Switch theme styles with `Hooks`, `CSS-IN-JS` and `CSS variables`
+ You can customize component prefixes, CSS variable prefixes, and CSS class prefixes to avoid component name or style conflicts
+ All components support on-demand loading by default
+ Provides extensive documentation and component examples

## [Documentation](https://ckpack.github.io/v-ui/)

## Getting Started

### Full Import

Completely import the component library.

```js
import { createApp } from 'vue';
import VUI from '@ckpack/v-ui';
import App from '@/App.vue';

const app = createApp(App);

app.use(VUI, {
  // ...Optional configuration parameters
});
app.mount('#app');
```

### Demand Import

```vue
<script setup>
import { VButton } from '@ckpack/v-ui';
</script>

<template>
  <VButton>
    Test
  </VButton>
</template>
```

