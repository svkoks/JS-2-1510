import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CatalogMen from '../views/Men.vue'
import CatalogWomen from '../views/Women.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/men',
    name: 'CatalogMen',
    component: CatalogMen
  },
  {
    path: '/women',
    name: 'CatalogWomen',
    component: CatalogWomen
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
