import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/login',
      name: 'LoginPage',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/add-post',
      name: 'AddNewPost',
      component: () => import('../views/AddNewPost.vue')
    },
    {
      path: '/posts/:id/edit',
      name: 'EditPost',
      component: () => import('../views/AddNewPost.vue'),
      props:true
    },
  ]
})

export default router
