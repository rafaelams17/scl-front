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
          return import(/* webpackChunkName: "section-popular-books" */ '../components/contentWeb/PopularBooks.vue');
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '../components/user/LoginPage.vue');
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import(/* webpackChunkName: "register" */ '../components/user/RegisterPage.vue');
    }
  },
  {
    path: '/forget-password',
    name: 'forget-password',
    component: function () {
      return import(/* webpackChunkName: "forget-password" */ '../components/user/ForgetPassword.vue');
    }
  },
  {
    path: '/book',
    name: 'book',
    component: function () {
      return import(/* webpackChunkName: "book" */ '../layouts/BookLayout.vue');
    },
    children: [
      {
        path: '', 
        name: 'dashboard',
        component: function () {
            return import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue');
        }
      }, 
      {
        path: '/register-book', 
        name: 'register-book',
        component: function () {
            return import(/* webpackChunkName: "register-book" */ '../components/book/RegisterBook.vue');
        }
      }, 
      {
        path: '/edit-book', 
        name: 'edit-book',
        component: function () {
            return import(/* webpackChunkName: "edit-book" */ '../components/book/EditBook.vue');
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
