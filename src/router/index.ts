// 1.引入
import { createRouter, createWebHistory } from 'vue-router'

// 2.创建路由实例
const router = createRouter({
  // 路由模式
  history: createWebHistory(),
  // 具体路由配置
  routes: [
    {
      path: '/',
      component: () => import('@views/home/home.vue')
    },
    {
      path: '/login',
      component: () => import('@views/login/login.vue') // 路由懒加载
    },
    {
      path: '/home',
      component: () => import('@views/home/home.vue')
    }
  ]
})

// 3.导出路由实例
export default router
