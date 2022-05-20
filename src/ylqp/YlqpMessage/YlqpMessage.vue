<template>
  <div class="ylqp-message-box" v-show="messageList.length">
    <ul>
      <li v-for="item in messageList" class="message-item" :class="item.isOver ? 'displayNone' : ''" :key="item.id">
        {{item.content ? item.content : '这是一条提示~'}}
      </li>
    </ul>
  </div>
</template>
<script>
const defaultOptions = {
  type: 'warning',
  content: '这是一条提示~',
  duration: 3000,
  isOver: false
}
export default {
  name: 'YlqpMessage',
  data () {
    return {
      messageList: []
    }
  },
  methods: {
    addMessage (userOptions) {
      const messageId = this.getMessageId()
      let messageItem = {
        ...defaultOptions, // 默认配置
        ...userOptions, // 用户配置
        id: messageId // 自增id
      }
      this.messageList.push(messageItem)
      // this.autoRemoveMessage()
      messageItem.timer = setTimeout(() => {
        const index = this.messageList.findIndex(item => item.id == messageId)
        this.messageList[index].isOver = true
        // this.messageList.splice(index, 1)
      }, messageItem.duration)
    },
    getMessageId () {
      if (!this.messageId) {
        this.messageId = 0
      }
      return `messageid_${this.messageId++}`
    }
  },
}
</script>
<style scoped lang="scss">
.ylqp-message-box {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 5s;
}
ul {
  width: 500px;
  margin: auto;
  margin-top: 50px;
  transition: all 5s;
}
.message-item {
  list-style: none;
  background-color: $danger-light;
  border: 1px solid lighten($danger, 30%);
  padding: 20px;
  margin-top: 20px;
  position: relative;
  border-radius: 4px;
  transition:  all 10s;
}
// .message-item:hover{
//   font-size: 20px;
// }
.displayNone {
  opacity: 0;
}
</style>