import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import BookView from '../views/BookView.vue'


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
          component: () => import('../components/home/PopularBookHome.vue'),
        }
      ]
    },
    {
      path: '/login',
      component: LoginView,
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../components/user/LoginUser.vue'),
        },
        {
          path: '/create-user',
          name: 'create-user',
          component: () => import('../components/user/CreateUser.vue'),
        },
        {
          path: '/forget-password',
          name: 'forget-password',
          component: () => import('../components/user/ForgetPasswordUser.vue'),
        },
      ]
    },
    {
      path: '/book',
      component: BookView,
      children: [
        {
          path: '', 
          name: 'dashboard',
          component: () => import('../components/book/Dashboard.vue'),
        }, 
        {
          path: '/create-book/:id', 
          name: 'create-book',
          component: () => import('../components/book/CreateBook.vue'),
        }, 
        {
          path: '/edit-book', 
          name: 'edit-book',
          component: () => import('../components/book/EditBook.vue'),
        }, 
        {
          path: '/feedback', 
          name: 'feedback',
          component: () => import('../components/Feedback.vue'),
        }
      ]
    }
  ]
});

// router.beforeEach(async (to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     // Authentication check
//     const token = localStorage.getItem('token');

//     // if token exists
//     if(token) {
//       // check if token is valid
//       console.log("Auth!")
//       return next();
//     }
//     return next('/book')
//   }
//   next();
// })

export default router
