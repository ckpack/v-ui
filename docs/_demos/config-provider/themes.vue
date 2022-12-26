<script setup lang="ts">
import { themes } from '@/index';
</script>

<template>
  <v-config-provider
    :themes="themes"
  >
    <v-space wrap>
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
</template>
