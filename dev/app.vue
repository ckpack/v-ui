<template>
  <div id="app">
    <ConfigProvider>
      <!-- button -->
      <Button>Test</Button>
      <!-- label -->
      <Label label="Hello Wrold" />
    </ConfigProvider>
  </div>
</template>
<script lang="ts">
import { ConfigProvider, Button, Label } from 'v-ui';

export default {
  name: 'App',
  components: {
    ConfigProvider,
    Button,
    Label,
  },
};
</script>
