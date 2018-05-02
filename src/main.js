// 1.1 导入vue第三方包
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 1.2 导入和vue无关的第三方包
import 'normalize.css'
import axios from 'axios'
import './less/index.less'

// 2 导入自己写的模块
import router from './router' //路由实例
import App from './App' //根组件
import api from './js/api-config.js' //接口配置

// 3.1 统一use启动vue插件
Vue.use(Vuex)
Vue.use(ElementUI)

// 3.2 统一添加配置
axios.defaults.baseURL = "http://157.122.54.189:9095" // 一配置以后所有的请求就会自动使用这个域名
axios.defaults.withCredentials = true // 浏览器有个安全机制,如果是跨域请求,浏览器是不会把本地cookie信息携带过去的

// 3.3 统一扩展Vue原型
Vue.prototype.$http = axios // 添加到原型,方便组件使用
Vue.prototype.$api = api // 导入api配置对象,为了使用更加方便,也把它导入到原型中

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
