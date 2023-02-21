<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance } from '@/index';

const formRef = ref<FormInstance>();
const form = reactive({
  msg: '',
  name: '',
});

const rules = {
  msg: { type: 'string', required: true, min: 4, max: 6 },
};

const validate = () => {
  formRef.value?.validate();
};

const clearValidate = () => {
  formRef.value?.clearValidate();
};

const handlerValidate = (...args: any[]) => console.log(args);
</script>

<template>
  {{ form }}
  <v-form ref="formRef" label-suffix=":" :model="form" :rules="rules as any" @validate="handlerValidate">
    <v-form-item name="msg" label="msg" help="4-6位">
      <input v-model="form.msg">
    </v-form-item>
    <v-form-item name="name" label="name" required>
      <input v-model="form.name">
    </v-form-item>

    <v-button type="button" @click="validate">
      validate
    </v-button>
    <v-button type="button" @click="clearValidate">
      clearValidate
    </v-button>
  </v-form>
</template>
