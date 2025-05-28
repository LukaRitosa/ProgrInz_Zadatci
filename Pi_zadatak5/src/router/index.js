import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'
import SignUpView from '../views/SignUpView.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'LogIn',
      component: LogInView,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUpView,
    },
    {
      path: '/user',
      name: 'UserView',
      component: UserView,
    },
  ],
})

export default router
