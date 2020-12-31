<template>
  <el-tooltip
    class="item"
    effect="light"
    content="输入后按enter搜索"
    :enterable="false"
    placement="bottom"
  >
    <el-input
      :value="value"
      size="medium"
      clearable
      v-bind="$attrs"
      v-on="$listeners"
      @keyup.enter.native="submit"
    ></el-input>
  </el-tooltip>
</template>

<script>
export default {
  name: "enter-input",
  data() {
    return { };
  },
  props: {
    value:''
  },
  methods: {
    //回车执行的函数
    submit() {
      this.$emit("submit");
    }
  }
};
</script>
