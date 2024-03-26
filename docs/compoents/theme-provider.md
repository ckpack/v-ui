# theme-provider

`theme-provider`用来注入的组件的样式，由于同一组件无法访问被注入的配置（[Vue 的 provide/inject 特性](https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity)），`config-provider` 在内部使用了该组件。

## 基础用法

<<< @/_demos/theme-provider/base.vue
--demo 一般无需直接使用`theme-provider`， 使用`config-provider`即可配置。

## API

### theme-provider 属性

无

### theme-provider 插槽

| 插槽名 | 描述     |
| :----- | :------- |
| default | 默认插槽 |
