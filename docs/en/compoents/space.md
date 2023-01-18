# Space

Use this component to provide uniform spacing between components.

## Basic usage
<<< @/_demos/space/base.vue
--demo The most basic usage, through this component to provide a uniform spacing between components.

## Control the size of the spacing

<<< @/_demos/space/size.vue
--demo control the size of the spacing by adjusting the value of `size`

## Arrangement direction
<<< @/_demos/space/direction.vue
--demo Vertical layout, use `direction` to control the way of layout, behind it is actually using `flex-direction` to control.

## Automatic line wrapping
<<< @/_demos/space/wrap.vue
--demo set automatic line wrapping via `wrap` control

## Alignment
<<< @/_demos/space/align-items.vue
--demo controls the alignment of child nodes through `align-items`

## Fill the whole line
<<< @/_demos/space/fill.vue
--demo controls the child node to fill the entire line through `fill`

## API
### space attribute

property name | description | type | default value |
| ----- | ------- | --------- | ----- |
| size | spacing size | `string \| enum` | medium
| align-items | alignment | `enum` | normal
| direction | arrangement direction | `enum` | row
| wrap | Whether to automatically wrap | `boolean` | false
| fill | whether to fill the entire line | `boolean` | false

### space slots

| Slot Name | Description |
| :----- | :------- |
| default | default slot |