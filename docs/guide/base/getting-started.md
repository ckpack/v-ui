开箱即用地支持多种引入方式。

## 完整引入

完整引入组件库。

```js
import VUI from '@ckpack/v-ui';
import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

app.use(VUI, {
  // ...可选配置参数
});
app.mount('#app');
```

或者使用`create`函数

```js
import { components, create, themes } from '@ckpack/v-ui';
import { createApp } from 'vue';
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

默认支持`tree shaking`，无需任何插件。

```html
<script setup>
  import { VButton } from '@ckpack/v-ui';
</script>

<template>
  <v-button>Test</v-button>
</template>
```

::: tip
出于大小以及性能的考虑，按需加载时没有注入所需组件的`CSS`, 你需要通过 `create` 函数(全局)或 `config-provider` 组件(局部)按需注入组件所需的 `CSS`。
[详情参考](./themes.md)
:::

## 浏览器直接引入

你也可以直接通过浏览器的`script`标签导入。

<iframe height="300" style="width: 100%;" scrolling="no" title="@ckpack/v-ui" src="https://codepen.io/chenkai0520/embed/wvxKYWj?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
