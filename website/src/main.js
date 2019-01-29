import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import VueRouter from 'vue-router';
import 'buefy/dist/buefy.css';

// import routes
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Buefy);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
