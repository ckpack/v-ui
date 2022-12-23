import type { Component, Ref } from 'vue';
import { computed, ref, unref } from 'vue';
import CaseComponents from '../components-demos';

export const useCompoents = (name: string | Ref<string> = '') => {
  const _name = ref(name);
  const compoents = computed(() => {
    return Object.keys(CaseComponents)
      .filter((n: string) => n.toLowerCase()
        .includes(unref(_name).toLowerCase()))
      .reduce((pre, cur) => {
        pre[cur] = CaseComponents[cur];
        return pre;
      }, {} as Record<string, Component>);
  });
  return {
    name: _name,
    compoents,
  };
};
