# v-ui

`@ckpack/v-ui` is a Vue3.x component library

## Features

+ Developed based on modern tools such as `Vite`, `Vue3.x`, `TypeScript`
+ Separation of `UI, state logic` and `CSS` for components
+ Use `Hooks`, `CSS-IN-JS` with `CSS Variables` to switch theme styles
+ You can customize component prefixes, `CSS` variable prefixes, and `CSS` class prefixes to avoid component name or style conflicts
+ All components support on-demand loading by default
+ Provides extensive documentation and component examples

## Related Links

+ Official website: https://ckpack.github.io/v-ui/
+ GitHub repository: https://github.com/ckpack/v-ui
+ npm: https://www.npmjs.com/package/@ckpack/v-ui
+ CDN: https://cdn.jsdelivr.net/npm/@ckpack/v-ui@latest/


## Script commands

```shell
# install dependencies
npm install
# Check the code specification
npm run lint
# Generate a log file to publish a new version
npm run release
# add new components
npm run gen component-name
# Package your component library
npm run build
npm run build:es
npm run build:dist
# preview document
npm run docs:dev
npm run docs:build
npm run docs:serve
```

## Dependent libraries

### dependencies
`@ant-design/colors`, `@emotion/css`
### devDependencies

`@antfu/eslint-config`, `@commitlint/cli`, `@commitlint/config-conventional`, `@vitejs/plugin-vue`, `@vue/tsconfig`, `eslint`, `fast-glob` , `husky`, `lint-staged`, `standard-version`, `tsx`, `typescript`, `unplugin-vue-define-options`, `vite`, `vite-plugin-dts`, `vitepress` , `vue`