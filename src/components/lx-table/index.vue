<template>
  <div id="lx-table">
    <el-table
      v-bind="$attrs"
      v-on="$listeners"
      :header-cell-style="$attrs['header-cell-style'] || headerstyle"
    >
      <template v-for="(column, index) in columns">
        <el-table-column
          v-if="!column.name&&!column.slot"
          :key="index"
          v-bind="column.attrs || {}"
          :align="column.attrs.align || align"
        ></el-table-column>
        <el-table-column
          v-else-if="!column.name&&column.slot"
          :key="index"
          v-bind="column.attrs || {}"
          :align="column.attrs.align || align"
        >
          <template v-slot="slot">
            <slot :name="column.slot" :slot="slot"></slot>
          </template>
        </el-table-column>
        <!-- 动态列使用 -->
        <template v-else>
          <slot :name="column.name" ></slot>
        </template>
      </template>
    </el-table>
    <el-row v-if="pagination">
      <el-footer>
        <el-pagination
          v-on="$listeners"
          v-bind="$attrs"
          background
          @current-change="paginationCurrentChange"
          :layout="layout"
        ></el-pagination>
      </el-footer>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'lx-table',
  props: {
    columns: Array,
    align: { // 可通过该配置为所有column设置align,column的align优先级高于table的align
      type: String,
      default: 'left'
    }, 
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    pagination: { // 是否开启分页
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 表头样式
    headerstyle() {
      return "background:#f5f7fa;color:rgba(0,0,0,.85);";
    },
    paginationCurrentChange(val) {
      // 分页的页码发生改变时调用，由于分页的current-change与表格的current-change冲突，分页事件用p-current-cahnge
      this.$emit("p-current-change", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-footer {
  margin-top: 10px;
  float: right;
}
</style>
