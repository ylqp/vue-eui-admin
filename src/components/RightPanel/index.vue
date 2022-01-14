<template>
  <div class="rightPanel-container" :class="{show:show}">
    <div class="rightPanel-background">
    </div>
    <div class="rightPanel">
      <div class="handle-button" :style="{'top': `${buttonTop}px`, 'background-color': theme }" @click="show=!show">
        <i :class="show ? 'el-icon-close' : 'el-icon-setting'"></i>
      </div>
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightPanel',
  props: {
    buttonTop: {
      type: Number,
      default: 250
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    theme() {
      return this.$store.state.settings.theme
    }
  }
}
</script>

<style lang="scss" scoped>
.rightPanel-background {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  background: rgba(0, 0, 0, .2);
  z-index: -1;
}
.rightPanel {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .05);
  background: #fff;
  z-index: 40000;
  transition: all .25s cubic-bezier(.7, .3, .1, 1);
  transform: translate(100%);
}
.show {
  .rightPanel-background {
    opacity: 1;
    width: 100%;
    height: 100%;
    z-index: 20000;
  }
  .rightPanel {
    transform: translate(0);
  }
}
.handle-button {
  width: 48px;
  height: 48px;
  position: absolute;
  left: -48px;
  text-align: center;
  line-height: 48px;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
  border-radius: 6px 0 0 6px;
}
</style>