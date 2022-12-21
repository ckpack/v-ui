<script setup lang="ts">
const token = {
  color: {
    primary: '#14C9C9',
  },
};
</script>

<template>
  <v-config-provider namespace="k" :token="token">
    <v-space wrap>
      <v-button disabled theme="primary">
        Button
      </v-button>
      <v-button theme="primary">
        Button
      </v-button>
      <v-button text theme="primary">
        Button
      </v-button>
      <v-button outlined theme="primary">
        Button
      </v-button>
      <v-button raised theme="primary">
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
</template>
