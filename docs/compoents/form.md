# Form

这是一个Form 表单

## 基础用法

<<< @/_demos/form/base.vue
--demo 这是一个表单

## Form API

### Form 属性

属性名   | 说明      | 类型        | 默认值   |
| ----- | ------- | --------- | ----- |
| labelSuffix  | 表单标签的后缀      | `string`  | -   |
| model | 表单数据对象 | `object` | -
| rules | 表单验证规则, 参考[async-validator](https://github.com/yiminghe/async-validator) | `object` | -

### Form 插槽

| 插槽名 | 描述     |
| :----- | :------- |
| default | 默认插槽 |

## Form Item API

### Form Item 属性

属性名   | 说明      | 类型        | 默认值   |
| ----- | ------- | --------- | ----- |
| label  | 标签文本      | `string`  | -   |
| for | label 原生属性 | `string` | -
| name | 表单字段名称 | `string` | -
| help | 说明内容 | `string` | -
| status | 校验状态 | `string` | -
| rules | 表单验证规则 | `object` | -
| validator | 校验函数 | `function` | -
| error | 错误信息 | `string` | -
| required | 是否为必填项 | `boolean` | false
| labelWidth | 标签宽度 | `string` | -
| showErrorMessage | 是否为凸起按钮 | `boolean` | true

### Form Item 插槽

| 插槽名 | 描述     |
| :----- | :------- |
| default | 默认插槽 |
