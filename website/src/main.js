import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueYouTubeEmbed from 'vue-youtube-embed';
import { Modal, Tabs, Icon } from 'buefy/dist/components';
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false;

Vue.use(Modal);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(VueYouTubeEmbed);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
