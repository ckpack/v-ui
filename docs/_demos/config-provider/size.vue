<script setup lang="ts">
const sizes = ['small', 'medium', 'large'];
</script>

<template>
  <v-space wrap>
    <v-config-provider
      v-for="size in sizes"
      :key="size"
      :size="size"
    >
      <v-space>
        <v-button>Default</v-button>
        <v-button theme="primary">
          Primary
        </v-button>
        <v-button theme="success">
          Success
        </v-button>
        <v-button theme="error">
          Error
        </v-button>
        <v-button theme="warning">
          Warning
        </v-button>
      </v-space>
    </v-config-provider>
  </v-space>
</template>
