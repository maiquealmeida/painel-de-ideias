import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue';
import HomeView from '../views/HomeView.vue'

import { useAuthStore } from '@/stores'
import { logout } from '@/stores/useAuthStore'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requiresAuth: true
      },

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        guestOnly: true
      },
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/LogoutView.vue'),
    },


  ]
})


router.beforeEach((to) => {
  const authStore = useAuthStore()

  authStore.rehydratate();

  if (to.meta.guestOnly && authStore.accessToken) return '/home'

  if (to.meta.requiresAuth && !authStore.accessToken) return '/login'
})

export default router
