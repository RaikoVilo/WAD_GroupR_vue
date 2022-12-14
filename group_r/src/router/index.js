import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import AddPostPage from '../views/AddPostPage.vue'
import EditPostPage from '../views/EditPostPage.vue'
import auth from "../../server/auth"

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
    component: LoginPage
  },
  {
    path: '/add-post',
    name: 'add post',
    component: AddPostPage
  },
  {
    path: '/edit-post/:id',
    name: 'add post',
    component: EditPostPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
