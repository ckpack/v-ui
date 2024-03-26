You can use this project to quickly create your own component library

## download

```bash
# git clone
git clone https://github.com/ckpack/v-ui.git

# download zip
https://github.com/ckpack/v-ui/archive/refs/heads/main.zip
```

## Global substitution variable

- Replace `v-ui` with your component library name such as `t-ui`
- Replace `ckpack` with your Github name eg `my-github-username`

## Modify component prefix

Modify the default configuration (`src/defaultConfig.js`), such as the default prefix of the component is `v` changed to `t`
```js
// ouput when modifying the iife format, such as `TUI`
export const NAME = 'TUI';
// Modify the default component class prefix, such as `t`
export const prefixCls = 't';
// Modify the default component prefix, such as `t`
export const prefixComponent = 't';
```

## Remove component

Remove unneeded components

## Add component

+ Use `npm run gen component-name` to add new components, such as executing the `npm run gen select` command, which will generate a `select` file directory in the `src/components/` directory,
+ Edit files under `src/components/select/select.vue` folder
+ Edit `src/themes/components/select.ts` file

## Preview component

Add a use case of a new component in the file `docs/_demos/`, execute `npm run dev` to preview the new component

```vue
<!-- docs/_demos/button/theme.vue -->
<template>
  <t-button theme="primary">
    Primary
  </t-button>
</template>
```

## Add component documentation

Add a document corresponding to the component name under the `docs/guide/components` folder, execute `npm run docs:dev` to preview the document

```md
<!-- docs/guide/components/button.md -->

# Button

<<< @/_demos/button/theme.vue
--demo define button theme color by `theme`
```
