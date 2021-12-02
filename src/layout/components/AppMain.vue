<template>
  <section class="app-main">
    <router-view />
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