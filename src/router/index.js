import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import WishList from '../views/WishList.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/history',
    name: 'History',
    component: History
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

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && localStorage.getItem('accesstoken')) next({ name: 'Home' })
  else next()
})
router.beforeEach((to, from, next) => {
  if (to.name === 'Register' && localStorage.getItem('accesstoken')) next({ name: 'Home' })
  else next()
})
router.beforeEach((to, from, next) => {
  if (to.name === 'Cart' && !localStorage.getItem('accesstoken')) next({ name: 'Home' })
  else next()
})
router.beforeEach((to, from, next) => {
  if (to.name === 'WishList' && !localStorage.getItem('accesstoken')) next({ name: 'Home' })
  else next()
})
router.beforeEach((to, from, next) => {
  if (to.name === 'History' && !localStorage.getItem('accesstoken')) next({ name: 'Home' })
  else next()
})

export default router
