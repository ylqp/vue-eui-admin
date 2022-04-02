<template>
  <section class="app-main">
    <!-- vue过渡 -->
    <transition name="fade-transform" mode="out-in">
      <router-view class="content-box"/>
    </transition>
    <Copyright />
  </section>
</template>

<script>
import Copyright from '@/components/Copyright'
export default {
  name: 'AppMain',
  components: { Copyright }
}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 100%;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  // Copyright 高度
  padding-bottom: 40px;
}
</style>