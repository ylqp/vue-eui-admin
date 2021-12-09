<template>
  <div class="search">
    <svg-icon class-name="search-icon" icon-class="search" @click.stop="click" />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {

    }
  },
  methods: {
    click () {
      console.log(123)
    }
      
  }
}
</script>

<style>
.search {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>