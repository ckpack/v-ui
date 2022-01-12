## Complete introduction

Fully introduce the component library.

```js
import {createApp} from'vue';
import App from'@/App.vue';
import VUI from'v-ui';
import'v-ui/dist/index.scss';

const app = createApp(App);

app.use(VUI);
app.mount('#app');
```

## Load on demand

By default, `tree shaking` is supported, no plug-in is needed. Directly importing `import {Button} from'v-ui'` will have the effect of loading on demand.


```html
<script>
  import {Button as VButton} from'v-ui';
  export default {
    components: {
      VButton,
    },
  }
</script>

<template>
  <v-button @click="handlerClick">Test</v-button>
</template>
```

## Browser Directly Introduce

You can also import it directly through the browser's `script`, `style` tags.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>VUI</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-ui/dist/index.css">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/v-ui/dist/index.min.js"></script>
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

## Style
#### Globally introduce styles

```js
import'v-ui/dist/index.css';
```

#### Introduce styles on demand

```js
import'v-ui/es/components/button/index.css';
import'v-ui/es/components/label/index.css';
```