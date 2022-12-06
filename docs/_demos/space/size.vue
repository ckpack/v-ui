<template>
  <v-space fill direction="column">
    <v-space wrap size="small" fill>
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
    <v-space wrap size="medium" fill>
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
    <v-space wrap size="large" fill>
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
    <v-space wrap size="4rem" fill>
      <v-button v-for="key in 4" :key="key" theme="primary">
        Button
      </v-button>
    </v-space>
  </v-space>
</template>
