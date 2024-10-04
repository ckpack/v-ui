<script setup lang="ts">
import type { FormInstance } from '@/index';
import { reactive, ref } from 'vue';

const formRef = ref<FormInstance>();
const form = reactive({
  msg: '',
  name: '',
  email: '',
  sex: '',
});

const rules = {
  msg: { type: 'string', required: true, min: 4, max: 6 },
  email: { type: 'email' },
};

function validate() {
  formRef.value?.validate();
}

function clearValidate() {
  formRef.value?.clearValidate();
}

const handlerValidate = (...args: any[]) => console.log(args);
</script>

<template>
  {{ form }}
  <v-form ref="formRef" label-suffix=":" :model="form" :rules="rules" @validate="handlerValidate">
    <v-form-item name="msg" label="msg" help="4-6位">
      <v-input v-model="form.msg" />
    </v-form-item>
    <v-form-item name="name" label="name" required>
      <v-input v-model="form.name" />
    </v-form-item>
    <v-form-item name="email" label="email">
      <v-input v-model="form.email" />
    </v-form-item>
    <v-form-item label="sex">
      <v-input v-model="form.sex" />
    </v-form-item>

    <v-button type="button" @click="validate">
      validate
    </v-button>
    <v-button type="button" @click="clearValidate">
      clearValidate
    </v-button>
  </v-form>
</template>
