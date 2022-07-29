import { createApp } from 'vue'

import Dev from './app.vue'
import '@ckpack/v-ui/src/styles/index.scss'
const app = createApp(Dev)

app.mount('#app')
