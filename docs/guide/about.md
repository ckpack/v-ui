# v-ui

`@ckpack/v-ui`是一个Vue3.x的组件库

## 功能特点

+ 基于`Vite`、`Vue3.x`、`TypeScript` 等现代化工具开发
+ 所有组件默认即支持按需加载
+ 通过`SCSS`、`CSS Variable` 主题切换如此方便
+ 提供丰富的文档和组件示例
+ 可自定义组件前缀、CSS 可以前缀避免潜在的组件名称或者样式冲突

## 相关链接

+ 官网: https://ckpack.github.io/v-ui/
+ GitHub 仓库: https://github.com/ckpack/v-ui
+ npm: https://www.npmjs.com/package/@ckpack/v-ui
+ CDN: https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/


## 脚本命令

```shell
# 安装依赖
npm install
# 检查代码规范
npm run lint
# 生成日志文件发布新版本
npm run release
# 添加新组件
npm run gen component-name
# 打包你的组件库
npm run build
npm run build:es
npm run build:dist
# 预览文档
npm run docs:dev
npm run docs:build
npm run docs:serve
```

## 目录结构

主要目录文件[线上显示](https://github.com/ckpack/v-ui)

```
.github
.husky
dev 预览组建目录
docs 文档目录
  .vitepress
  demo
  demo
  docs
  en
  about.md
  index.md
scripts
src 组建源码目录
  components
  hooks
  styles
  types
  utils
  components.ts
  create.ts
  defaultConfig.ts
  index.ts
  preset.ts
.eslintrc.cjs
.npmrc
.versionrc.json
CHANGELOG.md
commitlint.config.cjs
global.d.ts
package.json
README.md
tsconfig.json
```
## 依赖库

`@antfu/eslint-config`、 `@commitlint/cli`、 `@commitlint/config-conventional`、 `@vitejs/plugin-vue`、 `@vue/tsconfig`、 `eslint`、 `fast-glob`、 `husky`、 `lint-staged`、 `sass`、 `standard-version`、 `typescript`、 `unplugin-vue-define-options`、 `vite`、 `vite-node`、 `vite-plugin-dts`、 `vitepress`、 `vue`
