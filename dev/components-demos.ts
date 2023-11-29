// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck
const modules = import.meta.glob('../docs/_demos/*/*.vue', { eager: true, import: 'default' });

const Cases = Object.keys(modules).reduce((pre: any, cur) => {
  const [[,name, prop]] = [...cur.matchAll(/.+[/]([a-z-]+)[/]([a-z-]+)[.]vue/g)];
  pre[`${name}-${prop}`] = modules[cur];
  return pre;
}, {});

export default Cases;
