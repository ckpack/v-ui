export * from './vue-type';

type addPrefix<TKey, TPrefix extends string> = TKey extends string ? `${TPrefix}${TKey}` : never;
type removePrefix<TPrefixedKey, TPrefix extends string> = TPrefixedKey extends addPrefix<infer TKey, TPrefix> ? TKey : '';
type prefixedValue<TObject extends object, TPrefixedKey extends string, TPrefix extends string> = TObject extends { [K in removePrefix<TPrefixedKey, TPrefix>]: infer TValue } ? TValue : never;
export type addPrefixToObject<TObject extends object, TPrefix extends string> = {
  [K in addPrefix<keyof TObject, TPrefix>]: prefixedValue<TObject, K, TPrefix>
};

