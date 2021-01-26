import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/portfolio.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop.vue')
  },
  {
    path: '/cus_cart',
    name: 'cus_cart',
    component: () => import('../views/cus_cart.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  { 
      path: '/admin',
      name: 'dashboard',
      component: () => import('../views/dashboard.vue'),
      children:[
        {
          path: 'checkList',
          name: 'checkList',
          component: () => import('../views/checkList.vue'),
          meta: { requiresAuth:true }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/cart.vue'),
          meta: { requiresAuth:true }
        },
        {
          path: 'Coupon',
          name: 'Coupon',
          component: () => import('../views/coupon.vue'),
          meta: { requiresAuth:true }
        },
      ]
    },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
