<template>
  <div>
    <el-button @click="showComponent = !showComponent">hhhh</el-button>
    <IfShow v-show="showComponent" ref="aa"/>
    <div>{{childData}}</div>
  </div>
</template>

<script>
import IfShow from "../../components/IfShow.vue";
export default {
    components: { IfShow },
    data () {
      return {
        showComponent: true
      }
    },
    computed: {
      childData () {
        console.log(this)
      }
    }
}
</script>

<style>

</style>