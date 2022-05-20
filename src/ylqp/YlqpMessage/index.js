import Vue from 'vue'
import YlqpMessage from './YlqpMessage.vue'

let instance = null
const YlqpMessageConstructor = Vue.extend(YlqpMessage)

const init = () => {
  instance = new YlqpMessageConstructor()
  instance.$mount()
  document.body.appendChild(instance.$el)
}

YlqpMessage.install = Vue => {
  console.log('install')
  if (!instance) {
    init()
  }
  Vue.prototype.$ylqpMessage = instance.addMessage
}

export default YlqpMessage



