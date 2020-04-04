import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Icon, Table, Input, Popconfirm } from "ant-design-vue";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/index.css";

Vue.config.productionTip = false;

Vue.use(VXETable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
