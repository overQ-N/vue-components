/*
 * @Author: overQ
 * @Date: 2020-09-09 14:08:10
 * @LastEditors: overQ
 * @LastEditTime: 2020-09-16 17:18:13
 * @FilePath: \vue-components\src\components\lx-table\column.js
 * @Description: 表格配置项说明
 */

export const columns = (_this)=>[
  { //普通配置
    attrs:{
      showOverflowTooltip:true,
      prop:"unitPrice",
      label:_this.$getProdAttr('unit_price'),
      width:60,
      type:'index',
    }
  },
  { // 插槽使用 ,具体见使用的地方 如prodmanage/cart
    attrs:{
      label:'折扣值',
      showOverflowTooltip:true,
    },
    slot:'discount'
  },
  // 动态表格列使用,当列为不确定时使用 ,具体见使用的地方 如prodmanage/cart
  {
    name:'sizeCell'
  },
]