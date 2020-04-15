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
