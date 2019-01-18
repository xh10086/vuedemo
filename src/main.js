// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import Mock from './mock'
Mock.bootstrap();
import 'element-ui/lib/theme-chalk/index.css'

//Vue.config.productionTip = false

router.beforeEach((to, from, next) =>{
    //NProgress start();
    if(to.path=='/login'){
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(!user && to.path !='/login'){
        next({path:'/login'})
    }else{
        next()
    }

} )


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
