<template>
  <div>
    <section>
      <div class="example-title">0.5像素的border</div>
      <div class="example-con">
        -
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created() {
    console.log(this.$store.state)
  },
}
</script>

<style>
.example-title {
  color: skyblue;
}
.example-con {
  border: 1px solid;
}
</style>