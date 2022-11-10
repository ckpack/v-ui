import { createApp } from 'vue';
import * as VUI from '../';
import Dev from './app.vue';

const app = createApp(Dev);
app.use(VUI);
app.mount('#app');
