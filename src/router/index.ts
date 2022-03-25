import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../pages/login.vue'
import Home from '../pages/home.vue'
import Employee from '../pages/employee.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/employee/:id',
    component: () => import('../pages/employee-details.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'Login' && token === null) next({ name: 'Login' })
  else next()
})

export default router
