import fs from 'node:fs';
import { prefixComponent } from '../src/defaultConfig';

const basePath = process.cwd();

function formatComponent(component: string) {
  return component.split('-').map(name => name.slice(0, 1).toUpperCase() + name.slice(1)).join('');
}

function getCompoentsJS() {
  const components = fs.readdirSync(`${basePath}/src/components`);
  return `${components.map(name => `import ${formatComponent(name)} from '@/components/${name}';`).join('\n')}
\nexport {\n${components.map(name => `  ${formatComponent(name)} as ${prefixComponent.toUpperCase()}${formatComponent(name)},\n`).join('')}};\n`;
}

fs.writeFileSync(`${basePath}/src/components.ts`, getCompoentsJS());
