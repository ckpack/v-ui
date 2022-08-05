import fs from 'node:fs'

function formatComponent(component: string) {
  return component
    .split('-')
    .map(name => name.slice(0, 1).toUpperCase() + name.slice(1))
    .join('')
}

const basePath = process.cwd()
const componentName = process.argv.slice(2).join(' ')
const formatComponentName = formatComponent(componentName)

if (!/^[a-z]+(-[a-z]+){0,}$/.test(componentName)) {
  console.error(
    `component name is incorrect: ${componentName}\netc:\nbutton\nsome-button\nsome-button-group`,
  )
  process.exit(1)
}
if (fs.existsSync(`${basePath}/src/components/${componentName}`)) {
  console.error(`component name is already exist: ${componentName}`)
  process.exit(1)
}

fs.mkdirSync(`${basePath}/src/components/${componentName}`)

fs.writeFileSync(
  `${basePath}/src/components/${componentName}/${componentName}.vue`,
  `<template>
  <div :class="prefix">\n    ${componentName}\n  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getClsPrefix } from '../../defaultConfig';

export default defineComponent({
  name: '${formatComponentName}',
  setup() {
    const prefix = getClsPrefix('${componentName}');
    return {
      prefix,
    };
  },
});
</script>
`,
)
fs.writeFileSync(
  `${basePath}/src/components/${componentName}/index.scss`,
  `@use '../../styles/_variables' as *;

.#{$prefix}${componentName} {}`,
)
fs.writeFileSync(
  `${basePath}/src/components/${componentName}/index.ts`,
  `import ${formatComponentName} from './${componentName}.vue';
import { withInstallComponent } from '../../utils/compoent';

export default withInstallComponent(${formatComponentName});
`,
)
