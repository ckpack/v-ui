import fs from 'node:fs';

function formatComponent(component: string) {
  return component
    .split('-')
    .map(name => name.slice(0, 1).toUpperCase() + name.slice(1))
    .join('');
}

const basePath = process.cwd();
const componentName = process.argv.slice(2).join(' ');
const formatComponentName = formatComponent(componentName);

if (!/^[a-z]+(-[a-z]+){0,}$/.test(componentName)) {
  console.error(
    `component name is incorrect: ${componentName}\netc:\nbutton\nbutton-group`,
  );
  process.exit(1);
}
if (fs.existsSync(`${basePath}/src/components/${componentName}`)) {
  console.error(`component name is already exist: ${componentName}`);
  process.exit(1);
}

fs.mkdirSync(`${basePath}/src/components/${componentName}`);

fs.writeFileSync(
`${basePath}/src/components/${componentName}/${componentName}.vue`,
`<script setup lang="ts">
import { useNamespace } from '@/hooks';

defineProps({
  label: String,
});

defineOptions({
  name: '${formatComponentName}',
});

const ns = useNamespace('${componentName}');
</script>

<template>
  <div :class="ns.b()">\n    ${componentName}\n  </div>
</template>\n`);

fs.writeFileSync(
`${basePath}/src/components/${componentName}/index.scss`,
`@forward  './${componentName}.scss';\n`);
fs.writeFileSync(
  `${basePath}/src/components/${componentName}/${componentName}.scss`,
  `@use "../../styles/base.scss" as *;
  
  $prefix: '#{$namespace}-${componentName}';\n`);

fs.writeFileSync(
`${basePath}/src/components/${componentName}/index.ts`,
`import ${formatComponentName} from './${componentName}.vue';
import { withInstallComponent } from '@/utils';

export default withInstallComponent(${formatComponentName});\n`);
