<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    text-color="#fff"
    background-color="#333"
    router
  >
    <el-submenu
      :index="item.path"
      v-for="item in configRoutes"
      :key="item.path"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item
        :index="cItem.path"
        v-for="cItem in item.children"
        :key="cItem.path"
        >{{ cItem.label }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
import configRoutes from "@/router/routes";
export default {
  data() {
    return {
      configRoutes
    };
  },
  mounted() {},
  methods: {
    handleOpen() {},
    handleClose() {}
  }
};
</script>

<style></style>
