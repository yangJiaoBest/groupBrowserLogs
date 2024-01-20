import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 404页面配置
      path: '/:catchAll(.*)',
      component: () => import('../views/404.vue')
    },
    {
      path: '/',
      name: 'index',
      component: HomeView
    },
    {
      path: '/index',
      name: 'index',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Sign-In.vue'),
    },
  ]
})

export default router
