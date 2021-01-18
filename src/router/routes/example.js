import Layout from "@/layout/index.vue";

export default {
  sort: 1,
  path: "/example",
  component: Layout,
  name: "example",
  label: "示例",
  meta: {
    title: "example"
  },
  children: [
    {
      path: "/example/table",
      component: () => import("@/views/example/table"),
      name: "示例页",
      label: "表格",
      meta: { title: "index" }
    },
    {
      path: "/example/table/virtual-table",
      component: () => import("@/views/example/table/virtual-table"),
      name: "示例页",
      label: "虚拟表格",
      meta: { title: "index" }
    }
  ]
};
