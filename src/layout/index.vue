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
        <right-panel>
          <settings />
        </right-panel>
    </div>
  </div>
</template>
<script>
import { Sidebar, Navbar} from "./components";
import RightPanel from '@/components/RightPanel'
import variables from "@/styles/variables.scss";
import AppMain from './components/AppMain.vue';
import Settings from './components/Settings'
export default {
  name: "Layout",
  components: {
    Settings,
    RightPanel,
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