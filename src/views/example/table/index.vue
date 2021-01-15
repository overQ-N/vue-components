<template>
  <div>
    <lx-table
      size="mini"
      align="center"
      border
      :columns="table.columns"
      :data="table.data"
      v-loading="table.loading"
    >
      <template #action="{slot}">
        <el-button type="text" @click="handleDel(slot.row.id)">删除</el-button>
        <el-button type="text">编辑</el-button>
      </template>
    </lx-table>
  </div>
</template>

<script>
import lxTable from "@/components/lx-table";
import { tableColumns } from "./config/columns";
import { fetchData } from "@/api/example/table";
export default {
  data() {
    return {
      table: {
        columns: tableColumns,
        data: [],
        loading: false
      }
    };
  },
  components: {
    lxTable
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      try {
        this.table.loading = true;
        const { data: result } = await fetchData();
        this.table.data = result;
      } catch (error) {
        console.log("error", error);
      } finally {
        this.table.loading = false;
      }
    },
    handleDel() {}
  }
};
</script>

<style></style>
