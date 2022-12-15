import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import AddPostPage from '../views/AddPostPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import EditPostPage from '../views/EditPostPage.vue'
import auth from "../../server/auth"


 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      console.log(authResult)
      if (!authResult) {
          next('/login')
       } else {
          next();
       }
     }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/add',
    name: 'addpost',
    component: AddPostPage,
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      console.log(authResult)
      if (!authResult) {
          next('/login')
       } else {
          next();
       }
     }
  },
  {
    path: '/edit/:id',
    name: 'editpost',
    component: EditPostPage,
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      console.log(authResult)
      if (!authResult) {
          next('/login')
       } else {
          next();
       }
     }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
