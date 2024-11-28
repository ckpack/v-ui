Multiple import methods are supported out of the box.

## Full import

Completely import the component library.

```js
import App from '@/App.vue';
import VUI from '@ckpack/v-ui';
import { createApp } from 'vue';

const app = createApp(App);

app.use(VUI, {
  // ...optional configuration parameters
});
app.mount('#app');
```

or use the `create` function

```js
import App from '@/App.vue';
import { components, create, themes } from '@ckpack/v-ui';
import { createApp } from 'vue';

const app = createApp(App);

app.use(create({
  components,
  themes,
}), {
  // ...optional configuration parameters
});
app.mount('#app');
```

## Load on demand

By default, `tree shaking` is supported without any plugins.

```html
<script setup>
   import { VButton } from '@ckpack/v-ui';
</script>

<template>
   <v-button>Test</v-button>
</template>
```

::: tip
For size and performance considerations, `CSS` of the required component is not injected when loading on demand, you need to inject the required `css` of the required component through `create` function (global) or `config-provider` component (local) CSS`.
[Reference for details](./themes.md)
:::

## Imported directly by the browser

You can also import directly through the browser's `script` tag.

<iframe height="300" style="width: 100%;" scrolling="no" title="@ckpack/v-ui" src="https://codepen.io/chenkai0520/embed/wvxKYWj?default- tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
