import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/users/UsersView.vue'
import UserProfile from '../views/users/UserProfile.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'خانه',
    }
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
    meta: {
      title: 'کاربران',
    }
  },
  {
    path: '/users/:id',
    name: 'profile',
    component: UserProfile,
    // props :true,
    params:['id','name','family','age','position'],
    meta: {
      title: 'پروفایل',
    }
  },
  {
    path: '/all-users',
    redirect: '/users'
  },
  {
    path: '/:catchAll(.*)',//':pathMatch(.*)*'
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.afterEach((to) => {

    document.title = to.meta.title ? to.meta.title : 'default title';

})
export default router
