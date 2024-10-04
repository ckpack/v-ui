You can avoid potential style conflicts and component name conflicts through configuration parameters.

## Custom component prefix

When importing globally, we can use `prefixComponent` to customize the component prefix to solve the problem of component name conflicts.

### Custom component prefix when imported globally

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

### Introduce custom component prefix globally on demand

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

Then we can use it elsewhere like this

```html
<!-- <v-button>Test</v-button> -->
<t-button>Test</t-button>
```

## Custom class name prefix

Since `CSS` has no concept of scope, it may cause conflicts in component styles. We can use `prefixCls` to custom generate `class` and `CSS variable` prefixes to solve the problem of project style conflicts.

## Customize the class name prefix when importing globally
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

### Introduce custom class name prefix globally as needed

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

### Use `config-provider` to customize the class name prefix

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
