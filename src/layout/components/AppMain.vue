<template>
  <section class="app-main">
    <!-- vue过渡 -->
    <transition name="fade-transform" mode="out-in">
      <router-view />
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
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
}
</style>