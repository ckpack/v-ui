# config-provider

`config-provider` is used to provide global configuration options, so that your configuration can be accessed globally, `config-provider` uses [Vue's provide/inject feature](https://v3.vuejs .org/guide/composition-api-provide-inject.html#reactivity)

## Basic usage

<<< @/_demos/config-provider/base.vue
--demo to set the default configuration through this component

## Component size

<<< @/_demos/config-provider/size.vue
--demo Customize the default size of the component by modifying `size`.
## Component Namespace

<<< @/_demos/config-provider/prefix-cls.vue
--demo Customize component `class` name and `CSS` variable name by modifying `prefixCls`. (You can open the debug window to see the result).

## Component token

<<< @/_demos/config-provider/token.vue
--demo sets the default `token` of the component. By modifying `token`, we can present various styles (the `CSS` variable is used internally).

## Component theme

<<< @/_demos/config-provider/themes.vue
The --demo component is not responsible for generating styles, but introduces various styles through the injected theme. You can modify the default theme according to your needs.
## Set the locale

Set component default locale

## API

### config-provider property

property name | description | type | default value |
| ----- | ------- | --------- | ----- |
| size | default size | `string \| enum` | medium
| prefix-cls | component namespace | `string` | v
| token | component token | `Token` | default token
| themes | Component themes | `Themes` | -
| locale | locale | `Locale` | -

### config-provider slot

| Slot Name | Description |
| :----- | :------- |
| default | default slot |
