import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';
import Product from '../views/Product.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/:category/product/:id/:name',
        name: 'Product',
        component: Product,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
    },
    {
        path: '/catalog/:category',
        name: 'Catalog',
        component: Catalog, //  () =>
        //     import(/* webpackChunkName: "about" */ "../views/Catalog.vue")
    },
    {
        path: '/catalog',
        redirect: '/catalog/man',
    },
    {
        path: '/*',
        component: NotFoundPage,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior ( ) { 
        return { x: 0, y: 0 }
    }
});

export default router;
