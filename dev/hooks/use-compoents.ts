import type { Component, MaybeRefOrGetter } from 'vue';
import { computed, ref, toValue } from 'vue';
import CaseComponents from '../components-demos';

export function useCompoents(name: MaybeRefOrGetter<string> = '') {
  const _name = ref(name);
  const compoents = computed(() => {
    return Object.keys(CaseComponents)
      .filter((n: string) => n.toLowerCase()
        .includes(`${toValue(_name)}`.toLowerCase()))
      .reduce((pre, cur) => {
        pre[cur] = CaseComponents[cur];
        return pre;
      }, {} as Record<string, Component>);
  });
  return {
    name: _name,
    compoents,
  };
}
