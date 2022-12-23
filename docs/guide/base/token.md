`token`是组件库的设计变量，`@ckpack/v-ui`提供一套默认`token`，你可以通过设置`token`来快速的改变组件样式, 例如： 将主题颜色从紫色改为蓝色，

## 默认导入设置 `token`

```js
import VUI from '@ckpack/v-ui';

const app = createApp(App);
app.use(VUI, {
  token: {
    color: {
      primary: 'blue',
    }
  }
});
app.mount('#app');
```

## `create` 函数设置 `token`

```js
import { create, themes } from '@ckpack/v-ui';

const app = createApp(App);

app.use(create({
  themes,
}), {
  token: {
    color: {
      primary: 'blue',
    }
  }
});
app.mount('#app');
```

## `config-provider` 组件设置 `token`

```vue
<script setup lang="ts">
const token = {
  color: {
    primary: 'blue',
  }
};
</script>

<template>
  <v-config-provider
    :token="token"
  >
    <v-button theme="primary">
      Button
    </v-button>
  </v-config-provider>
</template>
```

::: tip
`@ckpack/v-ui`组件内部使用`token`生成一系列CSS变量, 这意味着你也可以通过覆盖这些 CSS 变量达到修改主题色的目的。

```CSS
:root {
  --v-color-primary-disabled: #cdb0ff;
  --v-color-primary-hover: #af87ff;
  --v-color-primary: #8b5cf6;
  --v-color-primary-active: #6842cf;
}
```
:::
