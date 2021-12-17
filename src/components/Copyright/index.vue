<template>
  <footer>
    ©底部版权{{`123---------------------------`}}
  </footer>
</template>

<script>
export default {
  name: 'Copyright'

}
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #9299a6;
}
</style>