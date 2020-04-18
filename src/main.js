import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { Button, Icon, Table, Input, Popconfirm ,Tooltip, TextArea} from "ant-design-vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/index.css";

Vue.config.productionTip = false;

Vue.use(Antd);
// Vue.use(Button);
// Vue.use(Tooltip);
// Vue.use(TextArea);
Vue.use(VXETable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
