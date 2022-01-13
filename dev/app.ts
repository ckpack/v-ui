import { createApp } from 'vue';

import Dev from './app.vue';
import '../src/styles/index.scss';

const app = createApp(Dev);

app.mount('#app');
