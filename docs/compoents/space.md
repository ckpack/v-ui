# Space

通过这个组件来给组件之间提供统一的间距。

## 基础用法
<<< @/_demos/space/base.vue
--demo 最基础的用法，通过这个组件来给组件之间提供统一的间距。

## 控制间距的大小

<<< @/_demos/space/size.vue
--demo 通过调整 `size` 的值来控制间距的大小

## 排列方向
<<< @/_demos/space/direction.vue
--demo 垂直布局, 使用 `direction` 来控制布局的方式, 背后实际上是利用了 `flex-direction` 来控制.

## 自动换行
<<< @/_demos/space/wrap.vue
--demo 通过`wrap`控制设置自动换行

## 对齐方式
<<< @/_demos/space/align-items.vue
--demo 通过`align-items`控制子节点对齐方式

## 充满整行
<<< @/_demos/space/fill.vue
--demo 通过`fill`控制子节点充满整行

## API
### space 属性

属性名   | 说明      | 类型        | 默认值   |
| ----- | ------- | --------- | ----- |
| size | 间距大小 | `string \| enum` | medium
| align-items  | 对齐方式      | `enum`  | normal
| direction | 排列方向 | `enum` | row
| wrap | 是否自动换行 | `boolean` | false
| fill | 是否充满整行 | `boolean` | false

### space 插槽

| 插槽名 | 描述     |
| :----- | :------- |
| default | 默认插槽 |
