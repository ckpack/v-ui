# Button

这是一个按钮

## 基础用法

<<< @/_demos/button/theme.vue
--demo 通过 `theme` 定义按钮主题颜色

## 文字按钮

<<< @/_demos/button/text.vue
--demo 使用 `text` 定义文本按钮（低强调）。文本按钮通常用于不太重要的操作

## 边框按钮

<<< @/_demos/button/outlined.vue
--demo 使用 `outlined` 定义轮廓按钮（中强调）。由于轮廓的缘故，比文本按钮更强调。

## 调整尺寸
<<< @/_demos/button/size.vue
--demo 使用 `size` 调整按钮尺寸, 可使用`small`,`medium`,`large`三种值

## 圆形按钮
<<< @/_demos/button/round.vue
--demo 使用 `round` 定义圆形按钮。

## 凸起按钮
<<< @/_demos/button/raised.vue
--demo 使用 `raised` 定义凸起按钮。

## 禁用状态
<<< @/_demos/button/disabled.vue
--demo 使用 `disabled` 禁用按钮。

## API

### button 属性

属性名   | 说明      | 类型        | 默认值   |
| ----- | ------- | --------- | ----- |
| theme  | 主题色      | `enum`  | default   |
| size | 按钮大小 | `enum` | medium
| round | 是否为圆形按钮 | `boolean` | false
| disabled | 是否为禁用状态 | `boolean` | false
| text | 是否为文本按钮 | `boolean` | false
| outlined | 是否为边框按钮 | `boolean` | false
| raised | 是否为凸起按钮 | `boolean` | false

### button 插槽

| 插槽名 | 描述     |
| :----- | :------- |
| default | 默认插槽 |
