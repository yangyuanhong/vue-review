/*
 * @Title: 路由
 * @Description: 项目路由
 * @Author: yuanhong.yang
 * @Date: 2022-02-21 11:41:15
 * @LastEditors: yuanhong.yang
 * @LastEditTime: 2022-02-21 17:25:04
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import clickOut from '../views/clickOut.vue'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: index,
  },
  {
    path: '/clickOut',
    name: 'ClickOut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/clickOut.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
