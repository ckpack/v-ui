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

export const camelCaseToDashes = (str: string) => {
  return str.replace(/([A-Z])/g, (x, y) => `-${y.toLowerCase()}`);
};

export const flattenObj = (ob: Record<any, any> = {}) => {
  const result: Record<string, any> = {};
  for (const i in ob) {
    if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i]);
      for (const j in temp) {
        result[camelCaseToDashes(`${i}${j && `-${j}`}`)] = temp[j];
      }
    }
    else {
      result[camelCaseToDashes(i)] = ob[i];
    }
  }
  return result;
};
