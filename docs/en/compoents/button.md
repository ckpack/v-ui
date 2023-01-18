# Button

this is a button

## Basic usage

<<< @/_demos/button/theme.vue
--demo define button theme color by `theme`

## text button

<<< @/_demos/button/text.vue
--demo Use `text` to define text buttons (low emphasis). Text buttons are usually used for less important actions

## border button

<<< @/_demos/button/outlined.vue
--demo Use `outlined` to define outlined buttons (middle emphasis). More emphasis than text buttons because of the outline.


## Resize
<<< @/_demos/button/size.vue
--demo Use `size` to adjust the button size, you can use `small`, `medium`, `large` three values

## round button
<<< @/_demos/button/round.vue
--demo Use `round` to define a round button.

## raised button
<<< @/_demos/button/raised.vue
--demo Use `raised` to define raised buttons.

## disabled state
<<< @/_demos/button/disabled.vue
--demo Disable button with `disabled`.

## API

### button property

property name | description | type | default value |
| ----- | ------- | --------- | ----- |
| theme | theme color | `enum` | default |
| size | button size | `enum` | medium
| round | Whether it is a round button | `boolean` | false
| disabled | whether it is disabled | `boolean` | false
| text | Whether it is a text button | `boolean` | false
| outlined | whether it is a border button | `boolean` | false
| raised | whether the button is raised | `boolean` | false

### button slot

| Slot Name | Description |
| :----- | :------- |
| default | default slot |