import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Table } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Table);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
