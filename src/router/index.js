import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/yourstyle',
    name: 'yourstyle',
    component: () => import(/* webpackChunkName: "yourstyle" */ '../components/your-style.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "project" */ '../components/project.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../components/about.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
