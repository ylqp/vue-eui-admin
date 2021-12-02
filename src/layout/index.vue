<template>
  <div class="layout">
    <div class="left-sider">
        <Sidebar />
    </div>
    <div class="main-container">
        <header>
          <Navbar />
        </header>
        <app-main />
        <footer>底部版权111111111</footer>
    </div>
  </div>
</template>
<script>
import { Sidebar, Navbar} from "./components";
import variables from "@/styles/variables.scss";
import AppMain from './components/AppMain.vue';
export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    AppMain,
  },
  data() {
    return {
      // isCollapse: false      
    }
  },
  computed: {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.layout {
  height: 100%;
  display: flex;
  overflow: hidden;
  .left-sider {
    transition: .28s;
  }
  .main-container {
    flex: 1;
  }
}
</style>