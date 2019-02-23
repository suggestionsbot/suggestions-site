import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

// import routes
const Home = () => import('@/views/Home');
const About = () => import('@/views/About');
const Privacy = () => import('@/views/Privacy');
const Terms = () => import('@/views/Terms');
const Partners = () => import('@/views/Partners');
const NotFound = () => import('@/views/NotFound');

const routes = [
    {
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
        path: '/partners',
        name: 'partners',
        component: Partners
    },
    {
        path: '/404',
        name: 'notfound',
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
];

export default new Router({
    mode: 'history',
    base: __dirname,
    routes
});

Vue.use(Router);
Vue.use(Meta);