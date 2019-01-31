import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

// import routes
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Privacy from '../views/Privacy.vue';
import Terms from '../views/Terms';
import Contact from '../views/Contact.vue';
import Partners from '../views/Partners.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        title: 'Home'
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: Privacy
    },
    {
        path: '/terms',
        name: 'terms',
        component: Terms
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/partners',
        name: 'partners',
        component: Partners
    }
];

export default new Router({
    mode: 'history',
    base: __dirname,
    routes
});

Vue.use(Router);
Vue.use(Meta);