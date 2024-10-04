你可以通过配置参数避免潜在的样式冲突以及组件名冲突。

## 自定义组件前缀

在全局引入时我们可以通过`prefixComponent`自定义组件前缀来解决组件名称冲突的问题。

### 全局引入时自定义组件前缀

```js
import App from '@/App.vue';
import VUI from '@ckpack/v-ui';
import { createApp } from 'vue';

const app = createApp(App);

app.use(VUI, {
  prefixComponent: 't',
});
app.mount('#app');
```

### 全局按需引入自定义组件前缀

```js
import App from '@/App.vue';
import { create, themes, VButton, VSpace } from '@ckpack/v-ui';
import { createApp } from 'vue';

const app = createApp(App);

app.use(create({
  components: [VButton, VSpace],
  themes,
}), {
  prefixComponent: 't',
});
app.mount('#app');
```

然后我们可以在其他地方就这样使用

```html
<!-- <v-button>Test</v-button> -->
<t-button>Test</t-button>
```

## 自定义类名前缀

由于`CSS`没有作用域的概念的，可能会造成组件样式的冲突，我们可以通过`prefixCls`自定义生成`class`以及`CSS 变量`前缀来解决项目样式冲突的问题。

## 全局引入时自定义类名前缀
```js
import App from '@/App.vue';
import VUI from '@ckpack/v-ui';
import { createApp } from 'vue';

const app = createApp(App);

app.use(VUI, {
  prefixComponent: 't',
  prefixCls: 't',
});
app.mount('#app');
```

### 全局按需引入自定义类名前缀

```js
import App from '@/App.vue';
import { create, themes, VButton, VSpace } from '@ckpack/v-ui';
import { createApp } from 'vue';

const app = createApp(App);

app.use(create({
  components: [VButton, VSpace],
  themes,
}), {
  prefixComponent: 't',
  prefixCls: 't',
});
app.mount('#app');
```

### 使用`config-provider`自定义类名前缀

```vue
<template>
  <v-config-provider
    prefix-cls="t"
  >
    <v-button theme="primary">
      Button
    </v-button>
  </v-config-provider>
</template>
```
