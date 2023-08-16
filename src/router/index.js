import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: 
  [ 
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'section-popular-books', 
          component: () => import('../components/contentWeb/PopularBooks.vue'),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/user/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/user/RegisterPage.vue'),
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: () => import('../components/user/ForgetPassword.vue'),
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('../layouts/BookLayout.vue'),
      meta: { 
        requiresAuth: true
      },
      children: [
        {
          path: '', 
          name: 'dashboard',
          component: () => import('../views/DashboardView.vue'),
        }, 
        {
          path: '/register-book', 
          name: 'register-book',
          component: () => import('../components/book/RegisterBook.vue'),
        }, 
        {
          path: '/edit-book', 
          name: 'edit-book',
          component: () => import('../components/book/EditBook.vue'),
        }
      ]
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // Authentication check
    const token = localStorage.getItem('token');

    // if token exists
    if(token) {
      // check if token is valid
      console.log("Auth!")
      return next();
    }
    return next('/book')
  }
  next();
})

export default router
