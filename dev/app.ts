import { createApp } from 'vue';
import Dev from './app.vue';
import VUI from '@/index';

const app = createApp(Dev);
app.use(VUI);
app.mount('#app');
