<template>
  <v-space fill direction="column">
    <v-space size="small" fill>
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
    <v-space size="default" fill>
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
    <v-space size="large" fill>
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
    <v-space size="4rem" fill>
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
  </v-space>
</template>
