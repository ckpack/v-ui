export function typeOf(v: unknown): string {
  return Object.prototype.toString.call(v).slice(8, -1).toLowerCase();
}

export const isBoolean = (val: unknown) => typeof val === 'boolean';
export const isFunction = (val: unknown) => typeof val === 'function';
export const isNumber = (val: unknown) => typeof val === 'number';
export const isString = (val: unknown) => typeof val === 'string';
export const isObject = (val: unknown) => typeOf(val) === 'object';

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

export function deepMerge(target: any, source: any): any {
  target = !Array.isArray(target) ? { ...target } : [...target];
  if (!source) { return target; }
  ([...Object.getOwnPropertySymbols(source), ...Object.getOwnPropertyNames(source)]).forEach((x: any) => {
    if (source[x] !== undefined) {
      if (['object'].includes(typeOf(source[x]))) {
        target[x] = deepMerge(target[x], source[x]);
      }
      else {
        target[x] = source[x];
      }
    }
  });
  return target;
}
