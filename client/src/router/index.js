import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Orders from '../views/Orders'
const routes = [
  {
    path:'/orders',
    name:'Orders',
    component:Orders
  },
  {
    path:'/',
    name:'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
