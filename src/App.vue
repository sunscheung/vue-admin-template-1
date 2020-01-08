<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
li,
ul,
p,
div,
body,
html,
table {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
li {
  list-style: none;
}
#app {
  height: 100%;
}
.ivu-menu-dark {
  background: unset;
}
.ivu-menu {
  background: #020f1d !important;
}
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu,
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
  background: #03152A !important;
}
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
  color: #fff;
  background: rgb(2,17,34) !important;
}
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu:hover, 
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active, 
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active,
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:hover, 
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:hover,
.index-vue .ivu-menu-item-selected {
  background: #375573 !important;
}
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu:hover,
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
  border-right: none;
  color: #ffffff;
  background: #375573 !important;
}
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
.index-vue .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
  color: #ffffff !important;
}
</style>
