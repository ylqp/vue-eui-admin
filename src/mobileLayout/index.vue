<template>
<div class="mobileBox">
  <router-view class="container" />
</div>
</template>
<script>
export default {
  name:''
}
</script>
<style scoped lang="scss">
.mobileBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  // padding-top: 100px;
  background: #f0f2f5;

}
.container {
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 850px;
  background: #fff;
}
@media screen {
  
}
</style>