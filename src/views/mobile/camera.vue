<template>
<div>
  <input type="file" accept="image/*,video/*" capture="camera" @change="upload"/>
  <el-button @click="showTime()">开始</el-button>
  <div>{{tips}}</div>
  <!-- <div v-for="item in ">
  </div> -->
</div>
</template>
<script>
import TRTC from 'trtc-js-sdk'
export default {
  name:'camera',
  data () {
    return {
      tips: 'init',
      deviceList: []
    }
  },
  created() {
    // this.$cos.getFileList().then(res => {
    //   console.log(res)
    // })
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(() => {
      console.log('allow')
    }).catch(() => {
      this.$message.error('无法使用设备摄像头，请刷新页面并允许访问')
    })
    this.$trtc.getDeviceList('camera').then(res => {
      console.log('trtc', res)
    })
    console.log(TRTC)
  },
  methods: {
    upload(e) {
      const files = e.currentTarget.files
      this.$cos.uploadFiles(files, () => {console.log('ok')})
    }
  }
}
</script>
<style scoped>
</style>