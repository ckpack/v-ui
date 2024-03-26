`@ckpack/v-ui` 声明组件的 `UI` 和 `CSS` 分离， 组件的样式基于[Vue 的 provide/inject 特性](https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity)，所以你需要通过 `create` 函数(全局)或 `config-provider` 组件(局部)按需注入组件所需的 `CSS`。

## 默认注入全部 `themes`

```js
import VUI from '@ckpack/v-ui';

const app = createApp(App);
app.use(VUI);
app.mount('#app');
```

## `create` 函数注入 `themes`

```js
import { create, themes } from '@ckpack/v-ui';

// 或按需注入themes
// import { baseInjectionKey, baseTheme, buttonInjectionKey, buttonTheme, create } from '@ckpack/v-ui';
// const themes = {
//   [baseInjectionKey]: baseTheme,
//   [buttonInjectionKey]: buttonTheme,
// };

const app = createApp(App);
app.use(create({
  themes,
}));
app.mount('#app');
```

## `config-provider` 组件注入 `themes`

```vue
<script setup lang="ts">
import { themes } from '@ckpack/v-ui';

// 或按需注入themes
// import { baseInjectionKey, baseTheme, buttonInjectionKey, buttonTheme /**  */ } from '@ckpack/v-ui';

// const themes = {
//   [baseInjectionKey]: baseTheme,
//   [buttonInjectionKey]: buttonTheme,
// };
</script>

<template>
  <v-config-provider
    :themes="themes"
  >
    <v-button theme="primary">
      Button
    </v-button>
  </v-config-provider>
</template>
```
