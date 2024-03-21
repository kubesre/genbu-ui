import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

/** 默认布局 */
const Layout = () => import('@/layout/index.vue')

/** 静态路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/error/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/403',
    component: () => import('@/views/error/403.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    meta: { hidden: false },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'icon-dashboard', svgIcon: 'menu-home', affix: true, hidden: false }
      }
    ]
  },
  {
    path: '/kubernetes',
    component: Layout,
    redirect: '/kubernetes',
    name: 'kubernetes',
    meta: { title: '容器管理', svgIcon: 'Kubernetes' },
    children: [
      {
        path: '/kubernetes/cluster',
        name: 'cluster',
        component: () => import('@/views/kubernetes/cluster/index.vue'),
        meta: { title: '集群管理', icon: 'icon-menu', affix: false, hidden: false }
      },
      {
        path: '/kubernetes/node',
        name: 'node',
        component: () => import('@/views/kubernetes/node/index.vue'),
        meta: { title: '节点管理', icon: 'icon-menu', affix: false, hidden: false }
      },
      {
        path: '/kubernetes/namespace',
        name: 'namespace',
        component: () => import('@/views/kubernetes/namespace/index.vue'),
        meta: { title: '命名空间', icon: 'icon-menu', affix: false, hidden: false }
      },
      {
        path: '/kubernetes/deployment',
        name: 'deployment',
        component: () => import('@/views/kubernetes/workload/index.vue'),
        meta: { title: '工作负载', icon: 'icon-menu', affix: false, hidden: false }
      },
      {
        path: '/kubernetes/network',
        name: 'network',
        component: () => import('@/views/kubernetes/network/index.vue'),
        meta: { title: '网络管理', icon: 'icon-menu', affix: false, hidden: false }
      },
      {
        path: '/kubernetes/pod',
        name: 'pod',
        component: () => import('@/views/kubernetes/pod/index.vue'),
        meta: { title: '配置管理', icon: 'icon-menu', affix: false, hidden: false }
      },
      {
        path: '/kubernetes/storage',
        name: 'storage',
        component: () => import('@/views/kubernetes/storage/index.vue'),
        meta: { title: '存储管理', icon: 'icon-menu', affix: false, hidden: false }
      },
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    name: 'system',
    meta: { title: '系统管理', svgIcon: 'menu-system' },
    children: [
      {
        path: '/system/user',
        name: '用户管理',
        component: () => import('@/views/system/user/index.vue'),
        meta: { title: '用户管理', icon: 'icon-user', affix: false, hidden: false }
      },
      {
        path: '/system/dept',
        name: '部门管理',
        component: () => import('@/views/system/dept/index.vue'),
        meta: { title: '部门管理', icon: 'icon-common', affix: false, hidden: false }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * @description 重置路由
 * @description 注意：所有动态路由路由必须带有 name 属性，否则可能会不能完全重置干净
 */
export function resetRouter() {
  try {
    router.getRoutes().forEach((route) => {
      const { name } = route
      // console.log('name', name, path)
      if (name && name !== 'Home') {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
