import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// layout
import Layout from '@/layout'

/**
 * constantRoutes
 * 没有权限要求的基本页面
 * 所有的用户都可以访问
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/clickOut.vue'),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ],
    hidden: true
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  }

]

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [

]

const createRouter = () => new Router({
  // mode: 'history', //require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
