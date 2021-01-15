export const tableColumns = [
  {
    attrs: {
      type: "index",
      label: "序号"
    }
  },
  {
    attrs: {
      prop: "name",
      label: "姓名",
      width: 100
    }
  },
  {
    attrs: {
      prop: "date",
      label: "日期"
    }
  },
  {
    attrs: {
      prop: "address",
      label: "地址",
      width: 150,
      showOverflowTooltip: true
    }
  },
  {
    attrs: {
      label: "操作",
      fixed: "right"
    },
    slot: "action"
  }
];
