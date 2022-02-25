import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Demo from '../views/Demo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/demo'
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
