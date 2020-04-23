import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.scss';
import api from './service/api'   // api接口
import utils from './utils/index' // 工具函数
import './utils/directive/index' // 自定义指令
import './utils/rem'

import "./components/_global/plugin"
import './components/_global.js' // 公共全局组件
import './components/_custom' // 自定义组件

Vue.prototype.$api = api;
Vue.prototype.$utils = utils;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
