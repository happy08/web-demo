import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
    meta: {
      index: 0,
      title: "首页"
    }
  },
  {
    path: '/home',
    redirect: { name: 'home' },
    component: () => import('@/views/home.vue'),
    meta: {
      index: 0,
      keepAlive: false,
      title: "首页"
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/index.vue'),
    meta: {
      index: 0,
      title: "登录"
    }
  },
  // {
  //   path: '/reg',
  //   name: 'reg',
  //   component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/reg.vue'),
  //   meta: {
  //     index: 1,
  //     title: "加入车内大健康"
  //   }
  // },
  {
    path: '/equipment',
    name: 'equipment',
    component: () => import(/* webpackChunkName: "equipment" */ '@/views/equipment/index.vue'),
    meta: {
      index: 1,
      title: "激活设备"
    }
  },
  {
    path: '/equipment_share',
    name: 'equipment_share',
    component: () => import(/* webpackChunkName: "equipment" */ '@/views/equipment/share.vue'),
    meta: {
      index: 1,
      title: "邀请同事加入"
    }
  },
  {
    path: '/mydata',
    name: 'mydata',
    component: () => import(/* webpackChunkName: "mydata" */ '@/views/mydata/index.vue'),
    meta: {
      index: 1,
      title: "订阅"
    }
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: () => import(/* webpackChunkName: "subscribe" */ '@/views/subscribe/index.vue'),
    meta: {
      index: 1,
      title: "订阅"
    }
  },
]


const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //切换路由，取消上个页面所有请求
  window.__axiosPromiseArr.forEach((ele, index) => {
    ele.cancel()
    window.__axiosPromiseArr.shift()
  })
  document.title = to.meta.title || "车内大健康"
  next()
})


export default router
