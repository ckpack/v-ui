# Button

这是一个图标


## 基础用法

<<< @/_demos/icon/svg.vue
--demo 通过 `svg` 定义图标

## 调整主题

<<< @/_demos/icon/theme.vue
--demo 通过 `theme` 定义图标主题颜色

## 调整尺寸
<<< @/_demos/icon/size.vue
--demo 使用 `size` 调整图标尺寸, 可使用`small`,`medium`,`large`三种值

## 禁用状态
<<< @/_demos/icon/disabled.vue
--demo 使用 `disabled` 禁用图标。

## 图标角度
<<< @/_demos/icon/rotate.vue
--demo 通过 `rotate` 定义图标角度

## 旋转图标
<<< @/_demos/icon/spin.vue
--demo 通过 `spin` 定义图标自动旋转

## 图标颜色
<<< @/_demos/icon/color.vue
--demo 通过 `color` 定义图标颜色

## 图标悬停颜色
<<< @/_demos/icon/hover-color.vue
--demo 通过 `hover-color` 定义图标悬停颜色

## API

### icon 属性

属性名   | 说明      | 类型        | 默认值   |
| ----- | ------- | --------- | ----- |
| theme  | 主题色  | `enum`  | default   |
| size | 图标大小 | `enum` | medium
| spin | 是否为自动旋转图标 | `boolean` | false
| disabled | 是否为禁用状态 | `boolean` | false
| rotate | 图标默认角度 | `number` | 0
| color | 图标颜色 | `string` | -
| hover-color | 图标悬停颜色 | `string` | -
