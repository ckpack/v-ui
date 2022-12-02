import { generate, grey } from '@ant-design/colors';
import type { InjectionKey } from 'vue';

const white = generate('#ffffff');
const black = generate('#000000');
const gray = generate('#dcdcdc');
const yellow = generate('#f59e0b');
const green = generate('#10b981');
const purple = generate('#8b5cf6');
const red = generate('#ef4444');

export const colors = {
  green,
  grey,
  purple,
  red,
  yellow,
  success: green,
  error: red,
  warning: yellow,
  primary: purple,
  white,
  black,
  gray,
};

export const colorVars = Object.keys(colors).reduce((pre: any, cur) => {
  colors[cur as keyof typeof colors].forEach((v, index) => {
    pre[`${cur}-${index}`] = v;
  });
  return pre;
}, {});

export const colorsInjectionKey = Symbol('buttonInjectionKey') as InjectionKey<typeof colors>;

export default colors;
