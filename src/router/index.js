import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  }, 
  {
    path: '/about-me',
    name: 'about-me',
    component: function () {
      return import(/* webpackChunkName: "about-me" */ '../components/AboutMe.vue')
    }
  },
  {
    path: '/popular-books',
    name: 'popular-books',
    component: function () {
      return import(/* webpackChunkName: "popular-books" */ '../components/PopularBooks.vue')
    }
  } 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
