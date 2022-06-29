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
<script lang="ts">
import { ConfigProvider, Button, Label } from '../src';

export default {
  name: 'App',
  components: {
    ConfigProvider,
    Button,
    Label,
  },
};
</script>
