<template>
  <v-space direction="column">
    <v-space wrap>
      <v-button v-for="key in 20" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>

    <v-space direction="column">
      <v-button v-for="key in 4" :key="key" theme="success">
        Button
      </v-button>
    </v-space>
  </v-space>
</template>

