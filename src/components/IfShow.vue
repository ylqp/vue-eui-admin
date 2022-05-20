<template>
<div>if-showtest</div>
</template>
<script>
export default {
  name:'ifshow',
  data () {
    return {
      aa: 123
    }
  },
  created() {
    console.log('创建')
    console.log(this.aa)
  },

  destroyed() {
    console.log(this.aa)
    console.log('销毁')
  },
}
</script>
<style scoped>
</style>