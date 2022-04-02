<template>
  <div class="layout">
    <div class="left-sider">
        <Sidebar />
    </div>
    <div class="main-container">
        <header>
          <Navbar />
          <tags-view v-if="needTagsView"></tags-view>
        </header>
        <div class="content-container" :class=" needTagsView ? 'hasTags' : '' ">
          <app-main />
        </div>
        <right-panel v-if="showSettings">
          <settings />
        </right-panel>
    </div>
  </div>
</template>
<script>
import { Sidebar, Navbar, TagsView} from "./components";
import RightPanel from '@/components/RightPanel'
import variables from "@/styles/variables.scss";
import AppMain from './components/AppMain.vue';
import Settings from './components/Settings'
import { mapState } from 'vuex';
export default {
  name: "Layout",
  components: {
    Settings,
    RightPanel,
    TagsView,
    Sidebar,
    Navbar,
    AppMain,
  },
  data() {
    return {
      // isCollapse: false      
    }
  },
  computed: {
    ...mapState({
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
    })
  },
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
    .content-container{
      /* 50= navbar  50  */
      height: calc(100vh - 50px);
      overflow: auto;
      &.hasTags{
        height: calc(100vh - 84px);
      }
    }
  }
}
</style>