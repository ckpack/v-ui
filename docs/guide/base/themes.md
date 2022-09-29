`@ckpack/v-ui`默认提供一套主题，如果需要更改主题色，例如： 将主题颜色从紫色改为蓝色，
你可以通过一下两种方法来快速的改变样式变量

# 通过 SCSS 变量

`@ckpack/v-ui`使用SASS编写而成，变了通过 `!default` 标志定义, 参考<https://sass-lang.com/documentation/at-rules/use#configuration> 你可以轻松修改配置, `@ckpack/v-ui`会根据你传入的主题色生成一系列梯度的颜色。

```SCSS
@use '@ckpack/v-ui/src/styles/base.scss' with (
  $namespace: 'v',
  $colors: (
    'primary': #409eff,
  ),
);
@use '@ckpack/v-ui/src/styles/index.scss'
```

# 通过 CSS 变量

`@ckpack/v-ui`组件内部使用了CSS 变量, 这意味着可以通过覆盖这些 CSS 变量也能达到修改主题色的目的。

```CSS
:root {
  --v-color-primary: #8b5cf6;
  --v-color-primary-0: #c5aefb;
  --v-color-primary-1: #b99dfa;
  --v-color-primary-2: #ae8df9;
  --v-color-primary-3: #a27df8;
  --v-color-primary-4: #976cf7;
  --v-color-primary-5: #8b5cf6;
  --v-color-primary-6: #743cf4;
  --v-color-primary-7: #5d1cf2;
  --v-color-primary-8: #4d0ce0;
  --v-color-primary-9: #420bc0;
}
```
