<!--
 * @Author: overQ
 * @Date: 2020-08-21 10:15:56
 * @LastEditors: overQ
 * @LastEditTime: 2020-09-02 14:13:35
 * @FilePath: \kdt-base-ui\src\components\excelExport\index.vue
 * @Description: description for this file
-->
<template>
  <lxDialog v-model="visible" :title="title">
      <el-steps :active="active" align-center>
        <el-step title="步骤1" @click.native="next(0)"></el-step>
        <el-step title="步骤2" @click.native="next(1)"></el-step>
        <el-step title="步骤3" @click.native="next(2)"></el-step>
        <el-step title="步骤4" @click.native="next(3)"></el-step>
      </el-steps>
      <el-row v-show="active===0">
        <el-col :span="12" :offset="6">
          <el-button type="text">下载导入模板</el-button>
        </el-col>
      </el-row>
      <excel-upload v-show="active===1" :beforeUpload='beforeUpload' :onSuccess='onSuccess'></excel-upload>
      <el-table :data="excelTable.data" border v-show="active===2">
        <el-table-column v-for="item of excelTable.header" :key="item" :prop="item" :label="item" />
      </el-table>
  </lxDialog>
</template>

<script>
import lxDialog from '@c/lx-dialog'
import excelUpload from './excel-upload'
export default {
  components: {
    excelUpload,
    lxDialog
  },
  props:{
    visible:Boolean,
    title:String,
    beforeUpload: Function,
    // onSuccess: Function
  },
  data(){
    return {
      active:0,
      excelTable:{
        header:[],
        data:[]
      }
    }
  },
  methods: {
    next(active){
      this.active = active
    },
    onSuccess({header,results}){
      this.excelTable.header = header
      this.excelTable.data = results
      this.next(2)
    },
  },
}
</script>

<style></style>
