import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from '@/store';

import 'normalize.css';
import '@/css/main.css';
import '@/directive/touch';

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
});
