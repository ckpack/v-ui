When we use `Vue.use` to install components, we can set some configuration of the component library through optional parameters.

> If we do not import globally, we can set it through the configuration provided by the `config-provider` component (except for custom component prefixes). Config Provider uses [Vue's provide/inject feature](https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity)

## Custom component prefix

In the global introduction, we can solve the problem of component name conflicts by customizing the component prefix.

```js
import {createApp} from'vue';
import App from'@/App.vue';
import {Button} from'v-ui';

const app = createApp(App);
app.use(Button, {
  componentPrefix:'K',
});

app.mount('#app');
```

When more components are introduced, you can use the more convenient `create` function to create applications.

```js
import {createApp} from'vue';
import App from'@/App.vue';
import {Button, Label, create} from'v-ui';

const app = createApp(App);

app.use(create([Button, Label]), {
  componentPrefix:'K',
});
app.mount('#app');
```

Then we can use it in other places like this

```html
  <k-button @click="handlerClick">Test</k-button>
  <k-label></k-label>
```

## Custom class name prefix

We can solve the problem of project style conflicts by customizing the `class` prefix.

```js
import {createApp} from'vue';
import App from'@/App.vue';
import {Button, create} from'v-ui';

const app = createApp(App);

app.use(Button, {
  componentPrefix:'K',
  clsPrefix:'k-',
});
app.mount('#app');
```

Due to the prefix change, you need to directly import and modify the original `scss` file.

```scss
@use'v-ui/src/style/_variables.scss' with (
  $cls-prefix:'k-',
);
@use'v-ui/src/style/index.scss';
```