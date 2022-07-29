当我们使用`Vue.use`安装组件时我们可以通过可选参数设置组件库的一些配置。

> 如果我们没有全局引入,则可以通过`config-provider`组件提供的配置来设置(自定义组件前缀除外)。Config Provider 使用了 [Vue 的 provide/inject 特性](https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity)

## 自定义组件前缀

在全局引入时我们可以通过自定义组件前缀来解决组件名称冲突的问题。

```js
import { createApp } from 'vue'
import { Button } from '@ckpack/v-ui'
import App from '@/App.vue'

const app = createApp(App)
app.use(Button, {
  componentPrefix: 'K',
})

app.mount('#app')
```

在引入的组件较多时可以使用更方便的`create`函数来创建应用。

```js
import { createApp } from 'vue'
import { Button, Label, create } from '@ckpack/v-ui'
import App from '@/App.vue'

const app = createApp(App)

app.use(create([Button, Label]), {
  componentPrefix: 'K',
})
app.mount('#app')
```

然后我们可以在其他地方就这样使用

```html
  <k-button @click="handlerClick">Test</k-button>
  <k-label></k-label>
```

## 自定义类名前缀

我们可以通过自定义`class`前缀来解决项目样式冲突的问题。

```js
import { createApp } from 'vue'
import { Button, create } from '@ckpack/v-ui'
import App from '@/App.vue'

const app = createApp(App)

app.use(Button, {
  componentPrefix: 'K',
  clsPrefix: 'k-',
})
app.mount('#app')
```

由于前缀变更，你需要直接引入并修改原始`scss`文件。

```scss
@use 'v-ui/src/style/_variables.scss' with (
  $cls-prefix: 'k-',
);
@use 'v-ui/src/style/index.scss';
```