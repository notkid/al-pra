<template>
  <el-menu
    router="true"
    background-color="#aac"
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <sidebar-item
      v-for="route in constantRoutes"
      :key="route.path"
      :item="route"
    ></sidebar-item>
  </el-menu>
</template>

<script>
import SidebarItem from "./SidebarItem.vue";
import { constantRoutes } from "../../router";

export default {
  components: { SidebarItem },
  data() {
    return {
        constantRoutes
    };
  },
};
</script>

<style>
</style>