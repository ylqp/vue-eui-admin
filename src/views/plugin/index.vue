<template>
  <div>
    <section>
      <el-button type="primary" @click="alertMessage">消息</el-button>
    </section>
  </div>
</template>
<script>
export default {
  name:'plugins',
  data () {
    return {

    }
  },
  methods: {
    alertMessage() {
      this.$ylqpMessage('123')
    }
  }
}
</script>
<style scoped>
</style>