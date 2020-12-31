export default{
  input:{
    component:'el-input',
    attrs:{
      placeholder:"请输入",
      clearable:true
    }
  },
  'enter-input':{
    component:'enter-input',
    attrs:{
      placeholder:'请输入',
      clearable:true
    }
  },
  select:{
    component:'form-select',
    attrs:{
      placeholder:'请选择',
      clearable:true
    }
  },
  date: {
    component: "el-date-picker",
    attrs: {
      placeholder: "选择日期",
      clearable: true,
      type: "date",
      format: "yyyy-MM-dd",
      ["value-format"]: "yyyy-MM-dd"
    }
  },
  checkbox:{
    component:'el-checkbox'
  }
}