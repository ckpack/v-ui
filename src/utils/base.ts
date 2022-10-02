export const toString = Object.prototype.toString;
export const isBoolean = (val: unknown) => typeof val === 'boolean';
export const isFunction = (val: unknown) => typeof val === 'function';
export const isNumber = (val: unknown) => typeof val === 'number';
export const isString = (val: unknown) => typeof val === 'string';
export const isObject = (val: unknown) => toString.call(val) === '[object Object]';
