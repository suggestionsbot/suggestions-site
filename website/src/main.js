import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';
import 'buefy/dist/buefy.css';

import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Buefy);
Vue.use(Meta);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
