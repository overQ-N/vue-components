<!--
 * @Author: overQ
 * @Date: 2020-08-20 15:07:12
 * @LastEditors: overQ
 * @LastEditTime: 2020-08-20 16:30:24
 * @FilePath: \kdt-base-ui\src\components\lx-dialog\index.vue
 * @Description: el-dialog的二次封装 
 *              确定onOk  取消 onCancel 其他使用方式与el-dialog一致
-->
<template>
  <el-dialog :visible="visible" v-bind="$attrs" v-on="$listeners" @close="onCancel">
    <slot></slot>
    <div slot="footer">
      <el-button size="mini" @click="onCancel">取消</el-button>
      <el-button size="mini" type="primary" @click="onOk">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props:{
    visible:{type:Boolean,default:false},
    onOk:{type:Function,default:()=>{}},
    onCancel:{type:Function,default:()=>{}}
  },
  model:{
    prop:'visible',
    event:'click'
  },
  methods:{
    
  },
  computed:{

  }
}
</script>

<style>

</style>