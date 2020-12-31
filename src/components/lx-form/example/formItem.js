export const formItems = (_this)=>[
  {
    itemAttrs:{ // el-form-item配置
      label:'款号'
    },
    attrs:{ // 表单组件配置
      placeholder:'请输入款号',
      clearable:true,
      key:'prodCode',//对应form的model
    },
    // 将要渲染成的组件
    tag:'enter-input'//与全局组件enterInput不同之处,在于$emit('submit')事件而非$emit('onSearch')
  },
  {
    itemAttrs:{
      label:'颜色'
    },
    tag:'select',
    attrs:{
      key:'color',
      collapseTags:true,
      multiple:true,
      options:[
        {
          itemValue:0,
          itemLabel:'张三'
        },
        {
          itemValue:1,
          itemLabel:'法外狂徒'
        }
      ],
      props:{
        value:'itemValue', //由于el-option只认value和label 可通过该配置灵活转成自定义的value or label
        label:'itemLabel'  // 配置
      }
    }
  },
  {
    itemAttrs:{
      label:'设计号'
    },
    tag:'select',
    attrs:{
      key:'amsCode',
      collapseTags:true,
    },
    getAttrs(Model){ //动态attrs 返回一个对象合并到attrs中
      return Model.age = 22 ?{disable:true}:{}
    },
    ifRender(Model){ //返回boolean值来判断是否渲染该组件 v-if
      return Model.age <= 10
    },
    listeners:{ // 组件事件
      change:_this.change,
      input:_this.input,//and 
    }
  }
]