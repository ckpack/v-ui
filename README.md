<h1 align="center">v-ui</h1>

<h4 align="center">
  <a href="https://ckpack.github.io/v-ui/">中文</a>
  |
  <a href="https://ckpack.github.io/v-ui/en/">ENGLISH</a>
</h4>

You can use this project to quickly create a component library based on vue 3.0. This is a super fast and super simple way to generate vue component library!

## [Documentation](https://ckpack.github.io/v-ui/)

## Features

- Quickly add new components via commands
- All components support on-demand loading by default
- Customizable component prefix to avoid component name and style conflicts
- Support component library document generation

## Script commands

For detailed commands, refer to the `scripts` part of `package.json`

```bash
# Installation dependencies
npm install

# Add new component
npm run gen component-name

# Package your component library
npm run build

# Check the code specification
npm run lint

# Generate log file to release new version
npm run release

# Generate documentation related commands
npm run docs:build
```

## download

```bash
# git clone
git clone https://github.com/ckpack/v-ui.git

# download zip
https://github.com/ckpack/v-ui/archive/refs/heads/main.zip
```

## Global replacement variables

- `v-ui` is `you-project-name` such as `b-ui`
- `ckpack` is `you-github-username` such as `my-github-username`

## Modify component prefix

The default component prefix is ​​`V`, you can choose to modify the component prefix
Modify the file `src/defaultConfig.js`

```js
// modify the ouput when iife format, such as `BUI`
export const NAME = "BUI";
// Modify the default component prefix, such as `B`
export const COMPONENT_PREFIX = "B";
```

The default component class prefix is ​​`v-`, you can choose to modify the component class prefix
Modify the file `src/styles/__variables.scss`

```scss
// Modify the default component class prefix such as `b-`
$prefix: b- !default;
```

## Start creating components

Use `npm run gen component-name` to add new components. For example, execute the `npm run gen select` command, which will generate the `select` file directory under the `src/components/` directory, and edit the `select` under the folder. vue`file and`index.scss` file

#### Preview the newly generated components

Introduce new components in the file `dev/app.vue`, execute `npm run dev` to preview the new components

```diff
<template>
  <div id="app">
    <ConfigProvider>
+ <Select></Select>
    </ConfigProvider>
  </div>
</template>
<script setup>
import {
+ ConfigProvider, Select,
} from'../src';
</script>

```

#### Add new component document

Add the document corresponding to the component name in the `docs/guide/compoents` folder, execute `npm run docs:dev` to preview the document

```md
<!-- docs/guide/compoents/select.md -->

# Select

Test component

<v-select></v-select>
```
