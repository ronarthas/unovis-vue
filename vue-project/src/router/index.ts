import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(location.host),
  routes: [
    {
      path: '/',
      name: 'dashbooard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Dashboard.vue')
    }
  ]
})

export default router
