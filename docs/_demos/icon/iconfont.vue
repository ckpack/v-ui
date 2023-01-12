<script setup lang="ts">
/*
需要先在页面引入`Symbol`类型的相关图标代码如
<script src="at.alicdn.com/t/font_2126466_0k1uy4dafct.js" />
*/

const svgs = [
  'icon-shanchu',
  'icon-home',
  'icon-logo',
];
</script>

<template>
  <v-space direction="column">
    <v-space wrap>
      <v-icon v-for="svg in svgs" :key="svg" :svg="svg" />
    </v-space>
  </v-space>
</template>
