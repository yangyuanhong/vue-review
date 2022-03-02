import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'

import Element from 'element-ui'
import './styles/element-variables.scss'
// import enLang from 'element-ui/lib/locale/lang/en' //英文包
import '@/styles/index.scss'

import App from './App.vue'
import store from './store'
import router from './router'

import './icons'
import './permission' // permission control
import './utils/error-log' // error log
if (process.env.NODE_ENV !== 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // 设置element-ui 的默认大小
  // locale: enLang //如果使用中文，无需设置，请删除
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
