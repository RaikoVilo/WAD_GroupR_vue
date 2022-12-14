import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import auth from "../../server/auth"
import AddPostPage from '../views/AddPostPage.vue'
import EditPostPage from '../views/EditPostPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    // beforeEnter: async (to, from, next) => {
    //   let authResult = await auth.authenticated();
    //   console.log(authResult)
    //   if (!authResult) {
    //       next('/login')
    //   } else {
    //       next();
    //   }
    // }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    // beforeEnter: async (to, from, next) => {
    //   let authResult = await auth.authenticated();
    //   console.log(authResult)
    //   if (!authResult) {
    //       next('/login')
    //   } else {
    //       next();
    //   }
    // }
  },
  {
    path: '/addPost',
    name: 'Add Post',
    component: AddPostPage,
    // beforeEnter: async (to, from, next) => {
    //   let authResult = await auth.authenticated();
    //   console.log(authResult)
    //   if (!authResult) {
    //       next('/login')
    //   } else {
    //       next();
    //   }
    // }
  },
  {
    path: '/editPost/:id',
    name: 'Edit Post',
    component: EditPostPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
