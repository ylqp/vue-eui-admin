<template>
  <div class="navbar">
    <Hamburger @toggleClick="toggleSideBar" :isActive="sidebar.opened"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
export default {
  components: {
    Hamburger
  },
  name: 'Navbar',
  data () {
    return {
        
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    display: flex;
    background-color: #fff;
  }
</style>