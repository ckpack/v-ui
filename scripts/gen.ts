import fs from 'node:fs';
import process from 'node:process';

function formatComponent(component: string) {
  return component
    .split('-')
    .map(name => `${name[0].toUpperCase()}${name.slice(1)}`)
    .join('');
}

const basePath = process.cwd();
const componentName = process.argv.slice(2).join(' ');
const formatComponentName = formatComponent(componentName);
const componentVName = `${formatComponentName[0].toLocaleLowerCase()}${formatComponentName.slice(1)}`;

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
import { computed, inject } from 'vue';
import { ${componentVName}InjectionKey } from '@/themes';

defineProps({});

defineOptions({
  name: '${formatComponentName}',
});

const IV = inject(${componentVName}InjectionKey);

const ${componentVName}Class = IV && computed(() => {
  const { hashId, ns } = IV;
  return [
    hashId,
    ns.b(),
  ];
});
</script>

<template>
  <div :class="${componentVName}Class">\n    ${componentName}\n  </div>
</template>\n`);

fs.writeFileSync(
`${basePath}/src/components/${componentName}/index.ts`,
`import ${formatComponentName} from './${componentName}.vue';
import { withInstallComponent } from '@/utils';

export default withInstallComponent(${formatComponentName});\n`);

fs.writeFileSync(
  `${basePath}/src/themes/components/${componentName}.ts`,
  `import { css } from '@emotion/css';
import type { InjectionKey } from 'vue';
import { useNamespace } from '@/hooks';

export const ${componentVName}Theme = () => {
  const ns = useNamespace('${componentVName}');

  const base = ns.b();
  const hashId = css({
    [\`&.\${base}\`]: {},
  });

  return {
    ns,
    hashId,
  };
};

export const ${componentVName}InjectionKey: InjectionKey<ReturnType<typeof ${componentVName}Theme>> = Symbol('${componentVName}InjectionKey');\n`);

console.log(`You may need to modify the following files:
src/components.ts
src/themes/index.ts`);
