// import VUI from '@/index';
import { components, create, themes } from '@/index';
import { createApp } from 'vue';

import Dev from './app.vue';

const app = createApp(Dev);
// app.use(VUI, {
//  prefixComponent: 'v',
//  prefixCls: 'v',
// });
app.use(create({
  components,
  themes,
}), {
  prefixComponent: 'v',
  prefixCls: 'v',
});

app.mount('#app');
