`@ckpack/v-ui` declares that `UI` and `CSS` of the component are separated, and the style of the component is based on [Vue's provide/inject feature](https://v3.vuejs.org/guide/composition-api-provide -inject.html#reactivity), so you need to inject the `CSS` required by the component on demand through `create` function (global) or `config-provider` component (local).

## Inject all `themes` by default

```js
import VUI from '@ckpack/v-ui';

const app = createApp(App);
app.use(VUI);
app.mount('#app');
```

## `create` function injected into `themes`

```js
import { create, themes } from '@ckpack/v-ui';

// or inject themes on demand
// import { baseInjectionKey, baseTheme, buttonInjectionKey, buttonTheme, create } from '@ckpack/v-ui';
// const themes = {
// [baseInjectionKey]: baseTheme,
// [buttonInjectionKey]: buttonTheme,
// };

const app = createApp(App);
app.use(create({
  themes,
}));
app.mount('#app');
```

## `config-provider` component injects `themes`

```vue
<script setup lang="ts">
import { themes } from '@ckpack/v-ui';

// or inject themes on demand
// import { baseInjectionKey, baseTheme, buttonInjectionKey, buttonTheme /** */ } from '@ckpack/v-ui';

// const themes = {
// [baseInjectionKey]: baseTheme,
// [buttonInjectionKey]: buttonTheme,
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