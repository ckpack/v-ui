`@ckpack/v-ui`默认提供一套`token`，如果需要更改主题色，例如： 将主题颜色从紫色改为蓝色，
你可以通过一下两种方法来快速的改变样式变量

# 通过变量

`@ckpack/v-ui`使用`CSS-IN-JS`编写而成，你可以通过简单的修改变量轻松修改配置, `@ckpack/v-ui`会根据你传入的`token`生成一系列CSS变量。[详情参考 config-provider组件](../../compoents/config-provider.md)

# 通过 CSS 变量

`@ckpack/v-ui`组件内部使用了CSS变量, 这意味着你也可以通过覆盖这些 CSS 变量也能达到修改主题色的目的。

```CSS
:root {
  --v-color-primary-disabled: #cdb0ff;
  --v-color-primary-hover: #af87ff;
  --v-color-primary: #8b5cf6;
  --v-color-primary-active: #6842cf;
}
```
