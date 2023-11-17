import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import MiVista from '@/views/MiVista.vue';
import MainViewVue from '@/views/MainView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainViewVue
    },
    {
      path: '/mi-vista',
      name: 'MiVista',
      component: MiVista
    },
  ]
})

export default router
