import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// layout
import Layout from '@/layout'
import MobileLayout from '@/mobileLayout'

// Router Modules

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/plugin',
    component: Layout,
    redirect: '/plugin/index',
    meta: { title: 'plugin', icon: 'skill'},
    children: [
      {
        path: 'index',
        component: () => import('@/views/plugin/index'),
        name: 'plugin',
        meta: {
          title: 'plugin'
        }
      }
    ]
  },
  {
    path: '/css',
    component: Layout,
    redirect: '/css/index',
    meta: { title: 'cssExamples', icon: 'star' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/css/index'),
        name: 'cssExamples',
        meta: {
          title: 'css-examples'
        }
      },
      {
        path: 'waterfall-flow',
        component: () => import('@/views/css/waterfall-flow'),
        name: 'waterfall-flow',
        meta: {
          title: 'waterfall-flow',
        }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    name: 'Zip',
    meta: { title: 'Zip', icon: 'el-icon-location' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'Export Zip' }
      },
      {
        path: 'aaa',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'Export Zip' }
      }
    ]
  },
  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'PDF', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/mobile',
    component: MobileLayout,
    redirect: '/mobile/index',
    name: 'mobile',
    children: [
      {
        path: 'index',
        component: () => import('@/views/mobile/index'),
        meta: { title: 'mobile', icon: 'pdf'}
      },
      {
        path: 'camera',
        component: () => import('@/views/mobile/camera'),
        hidden: true
      },
      {
        path: 'beforeCamera',
        component: () => import('@/views/mobile/beforeCamera'),
        hidden: true
      },
      {
        path: 'faceLive',
        component: () => import('@/views/mobile/faceLive'),
        hidden: true
      },
    ]
    
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    meta: { title: 'table', icon: 'table' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/table/index'),
        name: 'table',
        meta: { title: 'table' }
        
      },
      {
        path: 'ots',
        component: () => import('@/views/table/otsTable/index'),
        name: 'otsTable',
        meta: { title: 'otsTable' }
      },
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'http://172.16.6.130:8080/oxer/OTS-TeaLogin.html?tenant=cate',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  }
]

/**
 * asyncRoutes 
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    name: 'Permission',
    alwaysShow: true,
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor']
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin']
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'hash',
  routes: constantRoutes
})

export default router
