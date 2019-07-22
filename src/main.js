// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
Vue.prototype.axios = axios;
// Vue.prototype.HOST='/api';

// axios.defaults.baseURL = 'https://localhost:8081';
// axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


Vue.config.productionTip = false

//安装路由
Vue.use(VueRouter)

//安装 ElementUI
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 启用路由
  router,
  // 启用ElementUI
  render: h => h(App)
})
