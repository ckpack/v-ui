import fs from 'fs';

const basePath = process.cwd();

function formatComponent(component) {
  return component.split('-').map((name) => name.slice(0, 1).toUpperCase() + name.slice(1)).join('');
}

function getCompoentsJS() {
  const components = fs.readdirSync(`${basePath}/src/components`);
  return `${components.map((name) => `import ${formatComponent(name)} from './components/${name}';`).join('\n')}
\nexport {\n${components.map((name) => `  ${formatComponent(name)},\n`).join('')}};\n`;
}

function getCompoentsStyle() {
  const components = fs.readdirSync(`${basePath}/src/components`);
  return `${components.map((name) => `@use '../components/${name}/index.scss' as ${name};`).join('\n')}`;
}

fs.writeFileSync(`${basePath}/src/components.ts`, getCompoentsJS());
fs.writeFileSync(`${basePath}/src/styles/index.scss`, getCompoentsStyle());
