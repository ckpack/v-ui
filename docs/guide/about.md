# v-ui

`@ckpack/v-ui` 是一个Vue3.x的组件库

## 功能特点

+ 基于 `Vite` 、 `Vue3.x` 、 `TypeScript` 等现代化工具开发
+ 组件的 `UI、状态逻辑` 和 `CSS` 实现分离
+ 通过 `Hooks`, `CSS-IN-JS` 搭配 `CSS变量` 切换主题样式
+ 可自定义组件前缀、`CSS` 变量前缀、`CSS` 类前缀，避免组件名称或样式冲突
+ 所有组件默认即支持按需加载
+ 提供丰富的文档和组件示例

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

## 依赖库

### dependencies
`@ant-design/colors`、 `@emotion/css`
### devDependencies

`@antfu/eslint-config`、 `@commitlint/cli`、 `@commitlint/config-conventional`、 `@vitejs/plugin-vue`、 `@vue/tsconfig`、 `eslint`、 `fast-glob`、 `husky`、 `lint-staged`、 `standard-version`、 `tsx`、 `typescript`、 `unplugin-vue-define-options`、 `vite`、 `vite-plugin-dts`、 `vitepress`、 `vue`