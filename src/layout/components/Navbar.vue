<template>
  <div class="navbar">
    <div class="nav-left">
      <Hamburger @toggleClick="toggleSideBar" :isActive="sidebar.opened"/>
    </div>
    <div class="nav-right">
      <Search />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Search from '@/components/Search'
export default {
  components: {
    Hamburger,
    Search
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
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    justify-content: space-between;
  }
</style>