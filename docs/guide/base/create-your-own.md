你可以使用该项目快速创建自己的组件库

## 下载

```bash
# git clone
git clone https://github.com/ckpack/v-ui.git

# download zip
https://github.com/ckpack/v-ui/archive/refs/heads/main.zip
```

## 全局替换变量

- `v-ui` 为 `you-project-name` 如 `b-ui`
- `ckpack` 为 `you-github-username` 如 `my-github-username`

## 修改组件前缀

默认组件前缀是`V`,你可以选择修改组件前缀  
修改文件`src/defaultConfig.js`

```js
// 修改iife格式时的ouput, 如`TUI`
export const NAME = "TUI";
// 修改默认组件前缀， 如`B`
export const COMPONENT_PREFIX = "T";
```

默认组件类前缀是`v`,你可以选择修改组件类前缀  
修改文件`src/styles/config.scss`

```scss
// 修改默认组件类前缀如`t`
$namespace: t !default;
```

## 删除组件

## 添加组件

使用 `npm run gen component-name`添加新组件，如执行`npm run gen select`命令，该命令会在`src/components/`目录下生成`select`文件目录，编辑文件夹下的`select.vue`文件以及`index.scss`文件

## 预览组件

在文件`dev/app.vue`中引入新组件, 执行`npm run dev`预览新组件

```diff
<template>
  <div id="app">
    <ConfigProvider>
+      <Select></Select>
    </ConfigProvider>
  </div>
</template>
<script setup>
import {
+  ConfigProvider, Select,
} from '../src';
</script>
```

## 添加组件文档

在`docs/guide/compoents`文件夹下添加对应组件名的文档，执行`npm run docs:dev`预览文档

```md
<!-- docs/guide/compoents/select.md -->

# Select

测试组件

<v-select></v-select>
```
