import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

// import routes
const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const Privacy = () => import('@/views/Privacy.vue');
const Terms = () => import('@/views/Terms');
const Contact = () => import('@/views/Contact.vue');
const Partners = () => import('@/views/Partners.vue');
const TBD = () => import('@/views/TBD');

const routes = [
    {
        path: '/',
        name: 'home',
        component: TBD,
        title: 'Home'
    },
    {
        path: '/home',
        redirect: '/',
        name: 'home',
        component: Home,
        title: 'Home'
    },
    {
        path: '/about',
        redirect: '/',
        name: 'about',
        component: About
    },
    {
        path: '/privacy',
        redirect: '/',
        name: 'privacy',
        component: Privacy
    },
    {
        path: '/terms',
        redirect: '/',
        name: 'terms',
        component: Terms
    },
    {
        path: '/contact',
        redirect: '/',
        name: 'contact',
        component: Contact
    },
    {
        path: '/partners',
        redirect: '/',
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