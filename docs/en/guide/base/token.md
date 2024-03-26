`token` is the design variable of the component library, `@ckpack/v-ui` provides a set of default `token`, you can quickly change the style of the component by setting `token`, for example: change the theme color from purple to blue color,

## Default import settings `token`

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

## `create` function sets `token`

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

## `config-provider` component sets `token`

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
The `@ckpack/v-ui` component internally uses `token` to generate a series of CSS variables, which means that you can also modify the theme color by overriding these CSS variables.

```CSS
:root {
   --v-color-primary-disabled: #cdb0ff;
   --v-color-primary-hover: #af87ff;
   --v-color-primary: #8b5cf6;
   --v-color-primary-active: #6842cf;
}
```
:::
