import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import YlqpMessage from './ylqp/YlqpMessage'
import cos from './utils/cos'
// trtc
import $TRTC from './utils/trtc.js'
// 权限
import './permission'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './icons' // icon
import '@/styles/index.scss' // global css

Vue.use(Element)
Vue.use(YlqpMessage)
Vue.config.productionTip = false
Vue.prototype.$cos = cos
Vue.prototype.$trtc = $TRTC
window.Ylqp = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
