import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import directives from "./directives";
// import './plagins/element'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(directives);
Vue.config.productionTip = false;

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
