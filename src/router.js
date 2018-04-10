import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Login from "./views/Login"
import Register from "./views/Register"
Vue.use(Router)
import store from "./store"
function authcheck(to,from,next) {
  if(store.state.user){
    next();
  }
  else next('/login')
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: authcheck
    },
    {
      path:'/login',
      name: 'login',
      component: Login
    },
    {
      path:'/register',
      name: 'register',
      component: Register
    }
  ]
})
