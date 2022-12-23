开箱即用地支持多种引入方式。

## 完整引入

完整引入组件库。

```js
import { createApp } from 'vue';
import VUI from '@ckpack/v-ui';
import App from '@/App.vue';

const app = createApp(App);

app.use(VUI, {
  // ...可选配置参数
});
app.mount('#app');
```

或者使用`create`函数

```js
import { createApp } from 'vue';
import { components, create, themes } from '@ckpack/v-ui';
import App from '@/App.vue';

const app = createApp(App);

app.use(create({
  components,
  themes,
}), {
  // ...可选配置参数
});
app.mount('#app');
```

## 按需加载

默认支持`tree shaking`，无需任何插件，直接引入 `import { VButton } from '@ckpack/v-ui'` 就会有按需加载的效果。

```html
<script setup>
  import { VButton } from '@ckpack/v-ui';
</script>

<template>
  <v-button @click="handlerClick">Test</v-button>
</template>
```

::: tip
注意按需引入默认是没有注入组件`themes`的，你可以通过`create`函数(全局)或`config-provider`组件(局部)按需注入组建的`themes`。

### `create` 函数

```js
import { baseInjectionKey, baseTheme, buttonInjectionKey, buttonTheme /** 需要按需引入的themes */, create } from '@ckpack/v-ui';

const app = createApp(App);
app.use(create({
  themes: {
    [baseInjectionKey]: baseTheme,
    [buttonInjectionKey]: buttonTheme,
  }
}));
app.mount('#app');
```

### `config-provider` 组件

```vue
<script setup lang="ts">
import { baseInjectionKey, baseTheme, buttonInjectionKey, buttonTheme /** 需要按需引入的themes */ } from '@ckpack/v-ui';

const themes = {
  [baseInjectionKey]: baseTheme,
  [buttonInjectionKey]: buttonTheme,
};
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
:::

## 浏览器直接引入

你也可以直接通过浏览器的`script`标签导入。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>VUI</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@ckpack/v-ui/dist/v-ui.iife.js"></script>
</head>

<body>
  <div id="app">
    {{ count }}
    <v-button @click="handlerClick">Click</v-button>
  </div>
</body>
<script>
  const app = Vue.createApp({
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      handlerClick() {
        this.count += 1;
      },
    },
  });
  app.use(VUI);
  app.mount('#app')
</script>

</html>
```
