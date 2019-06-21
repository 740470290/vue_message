// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
Vue.directive('color', {
  bind: function (el, binding) {
    binding.value
      ? el.style.color = binding.value
      : el.style.color = 'red'
  }
})
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   if (to.path !== '/login' && to.path !== '/regis' && !store.state.isLogin) {
//     vm.$message({
//       message: '请先登录!',
//       type: 'warning'
//     })
//     next('/login')
//   } else {
//     next()
//   }
// })
