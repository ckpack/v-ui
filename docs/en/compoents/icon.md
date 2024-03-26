#Icon

This is an icon component that you can use by passing it an `svg` string or [symbol](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol).

::: tip

Its principle is very simple, set the initial style of `svg` through the following `css`.

+ This allows to control svg size via `font-size`

```css
svg {
   width: '1em';
   height: '1em';
}
```
+ This allows to control svg color via `color`

```css
svg {
   fill: 'currentcolor'; // So for multi-color icon color related properties will be invalid.
}
```
:::

## Basic usage

<<< @/_demos/icon/svg.vue
--demo define icons via `svg`

## Resize
<<< @/_demos/icon/size.vue
--demo use `size` to adjust icon [size]

## Icon angle
<<< @/_demos/icon/rotate.vue
--demo define icon angle via `rotate`

## Rotate icon
<<< @/_demos/icon/spin.vue
--demo define icon auto-rotation via `spin`

## Icon color
<<< @/_demos/icon/color.vue
--demo define icon color via `color`

## Icon hover color
<<< @/_demos/icon/hover-color.vue
--demo define icon hover color via `hover-color`

## Multicolor icons
<<< @/_demos/icon/multi-color.vue
--demo You can also use multi-color icons but this will invalidate the color-related properties.

## icon cursor
<<< @/_demos/icon/cursor.vue
--demo define icon cursor via `cursor`

## API

### icon property

property name | description | type | default value |
| ----- | ------- | --------- | ----- |
| svg | svg content or svg symbol | `enum` | -
| size | Icon size | [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) | Inherited font size
| spin | Whether to automatically rotate the icon | `boolean` | false
| rotate | icon default rotation | `number` | 0
| color | icon color | `string` | inherited color
| hover-color | icon hover color | `string` | inherited color
| cursor | icon cursor | `string` | default

## other

### Use [iconfont](https://www.iconfont.cn/)

+ The page introduces the icon code of `Symbol` type

```html
<script src="at.alicdn.com/t/font_2126466_0k1uy4dafct.js" />
```

+ Pass in the `Symbol` that refers to the icon

<<< @/_demos/icon/iconfont.vue
