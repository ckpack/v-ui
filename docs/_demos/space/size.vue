<template>
  <v-space direction="column">
    <v-space wrap size="small">
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
    <v-space wrap size="medium">
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
    <v-space wrap size="large">
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
    <v-space wrap size="4rem">
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
  </v-space>
</template>
