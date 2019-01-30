import VueRouter from 'vue-router';

// import routes
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Privacy from '../views/Privacy.vue';
import Terms from '../views/Terms';
import Contact from '../views/Contact.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: Home
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
    }
];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
});

export default router;