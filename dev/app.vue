<script lang="ts">
import { Button, ConfigProvider, Label } from '@ckpack/v-ui'

export default {
  name: 'App',
  components: {
    ConfigProvider,
    Button,
    Label,
  },
}
</script>

<template>
  <div id="app">
    <ConfigProvider>
      <!-- button -->
      <Button>Default</Button>
      <!-- label -->
      <Label label="Hello Wrold" />
    </ConfigProvider>
  </div>
</template>
