<!--
 * @Author: overQ
 * @Date: 2020-09-08 09:51:56
 * @LastEditors: overQ
 * @LastEditTime: 2020-09-15 10:29:08
 * @FilePath: \kdt-base-ui\src\components\lx-form\index.vue
 * @Description: 表单的二次封装，配置文件见example
-->

<template>
  <el-form :model="Model" v-bind="$attrs" ref="formRef">
    <el-row v-if="hasColProps">
      <el-col
        :xs="colProps.xs"
        :sm="colProps.sm"
        :md="colProps.md"
        :lg="colProps.lg"
        v-for="formItem in _formItems"
        :key="formItem.attrs.key"
      >
        <el-form-item
          :key="formItem.attrs.key"
          v-bind="formItem.itemAttrs || {}"
          :prop="formItem.attrs.key"
          v-if="formItem._ifRender"
        >
          <component
            v-if="!formItem.slot"
            :is="formItem.tag"
            v-bind="formItem.attrs || {}"
            v-model="Model[formItem.attrs.key]"
            v-on="formItem.listeners || {}"
            @submit="submit"
          ></component>
          <!-- 作用域插槽 -->
          <template v-else>
            <slot :name="formItem.slot" :slot="Model"></slot>
          </template>
        </el-form-item>
      </el-col>
    </el-row>
    <template v-else v-for="formItem in _formItems">
      <el-form-item
        :key="formItem.attrs.key"
        v-bind="formItem.itemAttrs || {}"
        :prop="formItem.attrs.key"
        v-if="formItem._ifRender"
      >
        <component
          v-if="!formItem.slot"
          :is="formItem.tag"
          v-bind="formItem.attrs || {}"
          v-model="Model[formItem.attrs.key]"
          v-on="formItem.listeners || {}"
          @submit="submit"
        ></component>
        <!-- 作用域插槽 -->
        <template v-else>
          <slot :name="formItem.slot" :scope="Model"></slot>
        </template>
      </el-form-item>
    </template>
  </el-form>
</template>

<script>
import basic from "./basic";
import formSelect from "./form-select";
import enterInput from './enter-input'
const form = Symbol('form') // 组件唯一标识
export default {
  components: {
    formSelect,
    enterInput
  },
  props: {
    formItems: Array,
    // submit: Function,
    colProps: {
      type: Object,
      default: () => ({})
    },
    formRef: String
  },
  data() {
    return {
      Model: {},
      form
    };
  },
  methods: {
    submit(){
      this.$emit('submit',this.Model)
    },
    // 动态组件 配置合并
    computeFormItem(formItem, Model) {
      let item = { ...formItem };
      if (item.slot) return item; // 不处理插槽,由外部控制
      let tag = item.tag || "input";
      let basicItem = basic[tag];
      item.tag = basicItem.component;
      item.attrs = Object.assign({}, basicItem.attrs, item.attrs); // {}空对象fix引用同一个basicItem

      // 动态attrs
      if(item.getAttrs){
        item.attrs = Object.assign(item.attrs,item.getAttrs(Model))
      }

      // 条件渲染
      item._ifRender = item.ifRender?item.ifRender(Model):true
      // 如果不渲染，删除提交时的key
      if(!item._ifRender){
        delete Model[item.attrs.keys]
      }
      return item;
    },

    // FormRef 方法
    validate(cb) {
      this.$refs["formRef"].validate(valid => cb(valid));
    },
    resetFields() {
      this.$refs["formRef"].resetFields();
    },
    clearValidate(props) {
      this.$refs["formRef"].clearValidate(props);
    },
    validateField(props, cb) {
      this.$refs["formRef"].validateField(props, errMsg => cb(errMsg));
    }
  },
  watch: {
    formItems: {
      handler(newVal) {
        newVal.forEach(formItem => {
          this.$set(this.Model, formItem.attrs.key, formItem.attrs.value || "");
        });
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    _formItems() {
      return this.formItems.map(formItem => this.computeFormItem(formItem,this.Model));
    },
    hasColProps() {
      return Object.keys(this.colProps).length !== 0;
    }
  }
};
</script>
