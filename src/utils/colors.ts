import { generate } from '@ant-design/colors';

export function generateColors(colors: any) {
  const res: any = {};
  for (const key in colors) {
    const color: string[] = Array.isArray(colors[key]) ? colors[key] : generate(colors[key]);
    color.reduce((pre, cur, index) => {
      // pre[`${key}-${index}`] = cur;
      if (index === 5) {
        pre[`${key}`] = cur;
      }
      if (index === 4) {
        pre[`${key}-hover`] = cur;
      }
      if (index === 6) {
        pre[`${key}-active`] = cur;
      }
      if (index === 3) {
        pre[`${key}-disabled`] = cur;
      }
      return pre;
    }, res);
  }
  return res;
}
