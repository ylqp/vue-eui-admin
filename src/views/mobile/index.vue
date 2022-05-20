<template>
<div>
  <div class="main-container">
    <div class="content">
      <img src="@/assets/ots/logo.png" alt="" class="logo mb30">
      <div class="title mb20 col_black">欢迎使用易考通身份验证</div>
      <div class="col_gray f14">易考通将使用人脸识别功能验证你的身份信息，请您确保为本人操作。</div>
    </div>
    <div>
      <input type="radio" class="mr3">
      <span class="col_gray f14">我承诺严格遵守考试纪律，同意易考通使用人脸识别功能验证我的身份信息，并<span class="col_blackQ">确保为本人操作</span>。</span>
    </div>
  </div>
  <footer>
    <button @click="goRoute">下一步</button>
  </footer>
</div>
</template>
<script>
export default {
  name: 'mobile',
  methods: {
    goRoute () {
      this.$router.push({
        path: '/mobile/beforeCamera'
      })
    }
  }
}
</script>
<style scoped lang="scss">
// .container{
//   width: 100%;
//   height: 100%;
// }
// .mobileBox {
//   width: 100%;
//   height: 100%;
//   background: #fff;
//   max-width: 350px;
//   max-height: 650px;
//   overflow: hidden;
// }
.main-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 60px 20px;
  padding-bottom: 80px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
.logo {
  width: 74px;
  height: 74px;
}
.title{
  font-size: 21px;
  font-weight: 500;
}
footer {
  position: relative;
  top: -60px;
  height: 60px;
  background: #fff;
  box-shadow: 0px -8px 12px 0px rgba(0, 0, 0, 0.08), inset 0px 1px 0px 0px #E7ECF1;
  padding: 8px 20px;
  box-sizing: border-box;
  display: flex;
  button {
    border: none;
    outline: none;
    flex: 1;
    border-radius: 6px;
    font-size: 15px;
    background: linear-gradient(45deg, #0067FF 0%, #2692FF 100%);
    color: #fff;
  }
  button:disabled {
    opacity: 0.5;
  }
}
</style>