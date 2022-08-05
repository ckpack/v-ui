开箱即用地支持多种引入方式。

## 完整引入

完整引入组件库。

```js
import { createApp } from 'vue'
import VUI from '@ckpack/v-ui'
import App from '@/App.vue'
import '@ckpack/v-ui/es/styles/index.scss'

const app = createApp(App)

app.use(VUI)
app.mount('#app')
```

## 按需加载

默认支持`tree shaking`，无需任何插件，直接引入 `import { Button } from '@ckpack/v-ui'` 就会有按需加载的效果。

```html
<script setup>
  import { Button as VButton } from '@ckpack/v-ui';
</script>

<template>
  <v-button @click="handlerClick">Test</v-button>
</template>
```

## 浏览器直接引入

你也可以直接通过浏览器的`script`, `style`标签导入。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>VUI</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-ui/dist/index.css">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/v-ui/dist/index.iife.js"></script>
</head>
<body>
  <div id="app">
    <v-button @click="handlerClick">Test</v-button>
    <v-label :label="count"></v-label>
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

## 样式
#### 全局引入样式

```js
import '@ckpack/v-ui/es/styles/index.css'
```

#### 按需引入样式

```js
import '@ckpack/v-ui/es/components/button/index.css'
import '@ckpack/v-ui/es/components/label/index.css'
```
