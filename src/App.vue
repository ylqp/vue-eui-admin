<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/styles/variables.scss";
* {
  margin: 0;
  padding: 0;
}
html, body, #app{
  margin: 0;
  padding: 0;
  height: 100%;
}
// 全局滚动条样式
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background:transparent; }
::-webkit-scrollbar-thumb { background:rgba(0,0,0,0.2); border-radius: 5px;}
// ::-webkit-scrollbar-thumb:hover { background:#f2f2f2 }
// ::-webkit-scrollbar-thumb:active { background:rgba(0,0,0,0.2); }

// .el-submenu .el-menu-item,
// .el-submenu .el-submenu__title{
//   background-color: $subMenuBg!important;
// }
</style>
