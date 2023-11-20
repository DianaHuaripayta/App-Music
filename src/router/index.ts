import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component:() => import('../layouts/MainLayout.vue'),
      children:[
         {path: '', component: () => import('@/components/ButtonComponent.vue')}
      ]
    },
    {
      path: '/:catchAll(.*)*',
      component:() => import('@/views/Error404.vue'),
    },
  ]
})

export default router
