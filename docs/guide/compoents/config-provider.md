# config-provider

Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到，Config Provider 使用了 [Vue 的 provide/inject 特性](https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity)

## 用例

```vue
<ConfigProvider cls-prefix="k-">
  <div id="app">
    <KButton></KButton>
  </div>
</ConfigProvider>
```

## Config Provider 属性

| 属性       | 说明       | 类型   | 可选值 | 默认值 |
| :--------- | :--------- | :----- | :----- | :----- |
| cls-prifix | 组件类前缀 | string | -      | v-     |

## ConfigProvider 插槽

| 插槽名 | 描述     |
| :----- | :------- |
| —      | 默认插槽 |
