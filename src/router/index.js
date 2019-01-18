import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Table from '@/components/nav1/Table'
import Form from '@/components/nav1/Form'
import User from '@/components/nav1/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      name: '导航',
      iconCls: 'el-icon-message',//图标样式class
      children: [
        { path: '/main', component: Main, name: '主页', hidden: true },
        { path: '/table', component: Table, name: '表格' },
        { path: '/form', component: Form, name: '内容' },
        { path: '/user', component: User, name: '列表' },
      ]
    }
  ]
})
