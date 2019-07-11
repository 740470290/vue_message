import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Register from '@/components/Register'
// import Login from '@/components/Login'
import Test from '@/components/Test'

const Login = () => import('@/components/Login')
const Register = () => import('@/components/Register')
Vue.use(Router)
const User = {
  props: ['query'],
  template: '<transition name="left"><div>User {{ query }}<router-link to="/user/12323?q=vue">123123</router-link></div></transition>',
  beforeRouteUpdate   (to, from, next) {
    // const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    // if (answer) {
    //   next()
    // } else {
    //   next(false)
    // }
    next()
  }
}
const router = new Router({
  mode: 'history',
  routes: [
    { path: '/user/:id', component: User, props: (route) => ({ query: route.query.q }) }, // ?q=vue
    {path: '/home', component: Home},
    {path: '/test', component: Test},
    {path: '/login', component: Login},
    {path: '/regis', component: Register},
    {path: '/*', redirect: '/home'}
  ]
})

export default router
