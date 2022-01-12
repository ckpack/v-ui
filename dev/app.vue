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
<script>
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
