// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './store'
import {
    sync
} from 'vuex-router-sync';
// 使用被存储
import VueLocalStorage from 'vue-localstorage';
import {
  WechatPlugin,
  AlertPlugin,
  ToastPlugin,
  XButton
} from 'vux'

Vue.use(AlertPlugin)
Vue.use(WechatPlugin)
Vue.use(VueRouter)
Vue.use(VueLocalStorage)

sync(store, router)

FastClick.attach(document.body)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 权限控制
  if(to.matched.some(m => m.meta.requiredAuth)){
  
  } else {
    
  }

  next();
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
