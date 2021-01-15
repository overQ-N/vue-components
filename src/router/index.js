import Vue from "vue";
import VueRouter from "vue-router";
import configRoutes from "./routes";
import Layout from "@/layout";
Vue.use(VueRouter);
const baseRoutes = [
  {
    path: "/",
    name: "首页",
    label: "首页",
    component: Layout,
    redirect: "/wel/index",
    children: [
      {
        path: "/wel/index",
        name: "/wel/index",
        label: "首页",
        component: () => import("@/layout/wel")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [...configRoutes, ...baseRoutes]
});

export default router;
