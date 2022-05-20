<template>
  <div></div>
</template>
<script>
export default {
  name:'beforeCamera',
  created() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(() => {
      console.log('allow')
      this.$router.push({
        path: '/mobile/faceLive'
      })
    }).catch(() => {
      this.$message.error('无法使用设备摄像头，请刷新页面并允许访问')
    })
  }
}
</script>
<style scoped>
</style>