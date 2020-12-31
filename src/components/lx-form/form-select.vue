<template>
  <el-select :value="value" v-bind="$attrs" v-on="$listeners">
    <el-option
      v-for="option in $attrs.options"
      :key="option.value"
      :label="option[props.label] || option.label"
      :value="option[props.value] || option.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "form-select",
  props: {
    value: {
      default: ""
    },
    /**
     * props 配置说明 可将option的value和label 绑定的键转换成自定义的键
     * props:{
     *  label:'custom label',
     *  value:'custom value'
     * }
     */
    props:{
      default:()=>({})
    },
    
  },
};
</script>

<style></style>
