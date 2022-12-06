import { createApp } from 'vue';
import Dev from './app.vue';
// import VUI from '@/index';
import { components, create } from '@/index';

const app = createApp(Dev);
app.use(create({ components }));
app.mount('#app');
