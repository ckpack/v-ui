/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' });

const Cases = Object.keys(modules).reduce((pre, cur) => {
  // @ts-expect-error
  const name = cur.split('/').pop().split('.').shift();
  // @ts-expect-error
  pre[name] = modules[cur];
  return pre;
}, {});

export default Cases;
