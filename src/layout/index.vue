<template>
  <el-container class="app-container">
    <el-aside width="200px">
      <sidebar> </sidebar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-card>
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import sidebar from "./sidebar";
export default {
  components: {
    sidebar
  }
};
</script>
<style lang="scss">
.app-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 10px;
  padding-bottom: 0;
}
.el-card {
  height: 100%;
  box-sizing: border-box;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
