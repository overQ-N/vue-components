<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    text-color="#fff"
    background-color="#333"
  >
    <!-- <el-submenu :index="item.path" v-for="item in routes" :key="item.path">
      <template slot="title" >
        <i class="el-icon-location"></i>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        :index="cItem.path"
        v-for="cItem in item.children"
        :key="cItem.path"
        >{{ cItem.name }}{{cItem.path}}</el-menu-item
      >
    </el-submenu> -->
  </el-menu>
</template>

<script>
import { routes } from "@/router";
export default {
  data() {
    return {
      routes,
    };
  },
  mounted() {
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style>
</style>
