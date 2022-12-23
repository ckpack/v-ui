你可以使用该项目快速创建自己的组件库

## 下载

```bash
# git clone
git clone https://github.com/ckpack/v-ui.git

# download zip
https://github.com/ckpack/v-ui/archive/refs/heads/main.zip
```

## 全局替换变量

- 替换`v-ui`为你的组件库名称 如 `t-ui`
- 替换`ckpack`为你的Github名称 如 `my-github-username`

## 修改组件前缀

修改默认配置(`src/defaultConfig.js`)，如组件默认前缀是`v`改为`t`
```js
// 修改iife格式时的ouput, 如`TUI`
export const NAME = 'TUI';
// 修改默认组件类前缀， 如`t`
export const prefixCls = 't';
// 修改默认组件前缀， 如`t`
export const prefixComponent = 't';
```

## 删除组件

删除不需要的组件

## 添加组件

+ 使用 `npm run gen component-name`添加新组件，如执行`npm run gen select`命令，该命令会在`src/components/`目录下生成`select`文件目录，
+ 编辑`src/components/select/select.vue`文件夹下文件
+ 编辑`src/themes/components/select.ts`文件

## 预览组件

在文件`docs/_demos/`中添加新组件的用例, 执行`npm run dev`即可预览新组件

```vue
<!-- docs/_demos/button/theme.vue -->
<template>
  <t-button theme="primary">
    Primary
  </t-button>
</template>
```

## 添加组件文档

在`docs/guide/compoents`文件夹下添加对应组件名的文档，执行`npm run docs:dev`预览文档

```md
<!-- docs/guide/compoents/button.md -->

# Button

<<< @/_demos/button/theme.vue
--demo 通过 `theme` 定义按钮主题颜色
```
