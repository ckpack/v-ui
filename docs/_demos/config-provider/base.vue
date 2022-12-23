<script setup lang="ts">
import { reactive } from 'vue';

const token = reactive({
  color: {
    primary: '#14C9C9',
  },
});

const changeColor = () => {
  token.color.primary = token.color.primary === '#14C9C9' ? '#8b5cf6' : '#14C9C9';
};
</script>

<template>
  <v-space>
    <v-button theme="primary">
      Button
    </v-button>
    <v-config-provider :token="token">
      <v-space>
        <v-button theme="primary" @click="changeColor">
          Button
        </v-button>
        <v-config-provider
          :token="{
            color: {
              primary: 'pink',
            },
          }"
        >
          <v-button theme="primary">
            Button
          </v-button>
        </v-config-provider>
      </v-space>
    </v-config-provider>
  </v-space>
</template>
