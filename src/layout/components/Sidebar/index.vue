<template>
  <div class="sideBar">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
      >
        <sidebar-item />
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
            <el-menu-item index="1-1">选项1111111111111111111111111111111111111</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
          <el-menu-item index="5-3">选项3</el-menu-item>
          <el-submenu index="5-4">
            <span slot="title">选项4</span>
            <el-menu-item index="5-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item index="6-1">选项1</el-menu-item>
          <el-menu-item index="6-2">选项2</el-menu-item>
          <el-menu-item index="6-3">选项3</el-menu-item>
          <el-submenu index="6-4">
            <span slot="title">选项4</span>
            <el-menu-item index="6-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
  </div>
</template>
<script>
import variables from "@/styles/variables.scss"
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem.vue'
export default {
  name: "SideBar",
  components: {SidebarItem},
  props: {
  },
  data() {
    return {
      // isCollapse: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
    variables () {
      return variables
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>