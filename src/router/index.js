import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import BookView from '../views/BookView.vue';
import { useAuthStore } from '@/stores/auth';

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
            meta: { auth: true },
          },
          {
            path: '/book/listagem',
            name: 'book',
            component: () => import('../components/book/TableBook.vue'),
            meta: { auth: true },
          },
          {
            path: '/create-book',
            name: 'create-book',
            component: () => import('../components/book/CreateBook.vue'),
            meta: { auth: true },
          },
          {
            path: '/edit-book/:id',
            name: 'edit-book',
            component: () => import('../components/book/EditBook.vue'),
            meta: { auth: true },
          }
        ]
      }
    ]
});

router.beforeEach(async (to, from, next) => {
  // para garantir que a pessoa quevai acessar tem autorização
  if (to.meta?.auth) {
    const auth = useAuthStore();
    if (auth.token && auth.id_user) {
      const isAuthenticated = await auth.checkToken();

      if (isAuthenticated) {
        next();
      } else {
        next({ name: 'login' });
      }
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
})

export default router
