# Icon

这是一个图标组件, 你可以通过向其传递一个`svg`字符串或者[symbol](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol)使用。

::: tip

它的原理很简单，通过以下`css`设置`svg`的初始样式。

+ 这允许通过`font-size`控制svg大小

```css
svg {
  width: '1em';
  height: '1em';
}
```
+ 这允许通过`color`控制svg颜色

```css
svg {
  fill: 'currentcolor'; // 所以对于多色图标颜色相关属性将无效。
}
```
:::


## 基础用法

<<< @/_demos/icon/svg.vue
--demo 通过 `svg` 定义图标

## 调整尺寸
<<< @/_demos/icon/size.vue
--demo 使用 `size` 调整图标[大小]

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

## 多色图标
<<< @/_demos/icon/multi-color.vue
--demo 你也可以使用多色图标但是这将导致颜色相关属性无效。

## 图标光标
<<< @/_demos/icon/cursor.vue
--demo 通过 `cursor` 定义图标光标

## API

### icon 属性

属性名   | 说明      | 类型        | 默认值   |
| ----- | ------- | --------- | ----- |
| svg | svg内容或者svg的symbol | `enum` | -
| size | 图标大小 | [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) | 继承字体大小
| spin | 是否为自动旋转图标 | `boolean` | false
| rotate | 图标默认角度 | `number` | 0
| color | 图标颜色 | `string` | 继承颜色
| hover-color | 图标悬停颜色 | `string` | 继承颜色
| cursor | 图标光标 | `string` | default


## 其他

### 使用 [iconfont](https://www.iconfont.cn/)

+ 页面引入`Symbol`类型的图标代码

```html
<script src="at.alicdn.com/t/font_2126466_0k1uy4dafct.js" />
```

+ 传入引用图标的`Symbol`

<<< @/_demos/icon/iconfont.vue




