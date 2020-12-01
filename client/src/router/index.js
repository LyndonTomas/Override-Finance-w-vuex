import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Orders from '../views/Orders'
import Help from '../views/Help'
import ViewOrder from "../views/ViewOrder.vue"
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
  },
  {
    path:"/view/:id",
    name:"ViewOrder",
    component:ViewOrder,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
