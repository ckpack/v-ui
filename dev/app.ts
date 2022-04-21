import { createApp } from 'vue';

import Dev from './app.vue';
import '@ckpack/v-ui/dist/index.css';

const app = createApp(Dev);

app.mount('#app');
