import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Orders from '../views/Orders'
import Help from '../views/Help'
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
  {
    path:'/help',
    name:'Help',
    component:Help
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
