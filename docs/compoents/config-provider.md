# config-provider

`config-provider` 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到，`config-provider` 使用了 [Vue 的 provide/inject 特性](https://v3.vuejs.org/guide/composition-api-provide-inject.html#reactivity)

## 基础用法

<<< @/_demos/config-provider/base.vue
--demo 通过这个组件来给设置默认配置

## 组件大小

<<< @/_demos/config-provider/size.vue
--demo 通过修改`size`自定义组件默认大小。
## 组件命名空间

<<< @/_demos/config-provider/prefix-cls.vue
--demo 通过修改`prefixCls`自定义组件`class`名、`CSS`变量名。(你可以打开调试窗口查看结果)。

## 组件token

<<< @/_demos/config-provider/token.vue
--demo 设置组件默认`token`，通过修改 `token`，我们可以呈现出各种各样的样式（内部使用了`CSS`变量）。

## 组件主题

<<< @/_demos/config-provider/themes.vue
--demo 组件不负责生成样式，而是通过注入的主题，引入了各种样式。你可以按照自己的需要去修改默认的主题。
## 设置语言环境

设置组件默认语言环境

## API

### config-provider 属性

属性名   | 说明      | 类型        | 默认值   |
| ----- | ------- | --------- | ----- |
| size  | 默认大小     | `string \| enum`  | medium
| prefix-cls | 组件命名空间 | `string` | v
| token | 组件token | `Token` | 默认token
| themes | 组件主题 | `Themes` | -
| locale | 语言环境 | `Locale` | -

### config-provider 插槽

| 插槽名 | 描述     |
| :----- | :------- |
| default | 默认插槽 |
