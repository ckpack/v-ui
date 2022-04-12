# config-provider

Config Provider is used to provide global configuration options so that your configuration can be accessed globally. Config Provider uses [Vue's provide/inject feature](https://v3.vuejs.org/guide/composition -api-provide-inject.html#reactivity)

## Example

```vue
<ConfigProvider cls-prefix="k-">
   <div id="app">
     <KButton></KButton>
   </div>
</ConfigProvider>
```

## Config Provider properties

| Property | Description | Type | Optional Value | Default Value |
| :--------- | :--------- | :----- | :----- | :----- |
| cls-prifix | Component class prefix | string |-| v- |

## ConfigProvider slot

| Slot name | Description |
| :----- | :------- |
| - | Default slot |
