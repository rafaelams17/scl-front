import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [ 
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'section-popular-books', 
        component: function () {
            return import(/* webpackChunkName: "section-popular-books" */ '../components/PopularBooks.vue')
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/pages/LoginPage.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/pages/RegisterPage.vue')
    }
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../views/pages/ForgetPassword.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
