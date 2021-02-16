import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Products from '../views/Products.vue'
import Film from '../views/Film.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Shop
  },
  {
    path: '/categories/:name',
    name: 'Category',
    component: Products
  },
  {
    path: '/film',
    name: Film,
    component: Film
  },
  {
    path: '/admin',
    name: Admin,
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
