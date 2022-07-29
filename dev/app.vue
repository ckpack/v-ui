<script setup lang="ts">
import { Button, ConfigProvider, Label } from '@ckpack/v-ui/src'
</script>

<template>
  <div id="app">
    <ConfigProvider>
      <h4>Button</h4>
      <Button>Default</Button>
      <Button round>
        Default
      </Button>
      <div>
        <h4>Label</h4>
        <Label label="Hello Wrold" />
      </div>
    </ConfigProvider>
  </div>
</template>
