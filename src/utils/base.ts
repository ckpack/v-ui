export const toString = Object.prototype.toString;
export const isBoolean = (val: unknown) => typeof val === 'boolean';
export const isFunction = (val: unknown) => typeof val === 'function';
export const isNumber = (val: unknown) => typeof val === 'number';
export const isString = (val: unknown) => typeof val === 'string';
export const isObject = (val: unknown) => toString.call(val) === '[object Object]';

export const filterUndefinedKey = (obj: Record<string, any> | undefined = {}) => {
  const res: Record<string, any> = {};
  for (const key in obj) {
    if (obj[key]) {
      res[key] = obj[key];
    }
  }
  return res;
};
