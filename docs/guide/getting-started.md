# v-ui

你可以使用该项目快速创建基于 vue 3.0 的组件库。 这是生成 vue 组件库的超快、超简单的一种方式！

## 功能特点

- 通过命令快速添加新组件
- 所有组件默认支持按需加载
- 可自定义组件前缀，避免组件名称、样式冲突
- 支持组件库文档生成

## 脚本命令

详细命令参考`package.json`的`scripts`部分

```bash
# 安装依赖
npm install

# 添加新组件
npm run gen component-name

# 打包你的组件库
npm run build

# 检查代码规范
npm run lint

# 生成日志文件发布新版本
npm run release

# 生成文档相关命令
npm run docs:build
```

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
// 修改iife格式时的ouput, 如`BUI`
export const NAME = "BUI";
// 修改默认组件前缀， 如`B`
export const COMPONENT_PREFIX = "B";
```

默认组件类前缀是`v-`,你可以选择修改组件类前缀  
修改文件`src/styles/__variables.scss`

```scss
// 修改默认组件类前缀如`b-`
$prefix: b- !default;
```

## 开始创建组件

使用 `npm run gen component-name`添加新组件，如执行`npm run gen select`命令，该命令会在`src/components/`目录下生成`select`文件目录，编辑文件夹下的`select.vue`文件以及`index.scss`文件

### 预览新生成的组件

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

#### 添加新组件文档

在`docs/guide/compoents`文件夹下添加对应组件名的文档，执行`npm run docs:dev`预览文档

```md
<!-- docs/guide/compoents/select.md -->

# Select

测试组件

<v-select></v-select>
```
