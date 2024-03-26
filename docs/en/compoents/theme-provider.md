# theme-provider

The style of the component injected by `theme-provider`, because the same component cannot access the injected configuration ([Vue's provide/inject feature](https://v3.vuejs.org/guide/composition-api-provide- inject.html#reactivity)), `config-provider` uses this component internally.

## Basic usage

<<< @/_demos/theme-provider/base.vue
--demo generally does not need to use `theme-provider` directly, use `config-provider` to configure.

## API

### theme-provider attribute

none

### theme-provider slot

| Slot Name | Description |
| :----- | :------- |
| default | default slot |
