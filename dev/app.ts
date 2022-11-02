import { createApp } from 'vue';
import * as VUI from '@ckpack/v-ui/src';
import Dev from './app.vue';
// import './index.scss';

const app = createApp(Dev);
app.use(VUI, {
  componentPrefix: 'V',
});
app.mount('#app');
