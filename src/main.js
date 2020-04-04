import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Icon, Table, Input, Popconfirm } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Icon);
Vue.use(Table);
Vue.use(Input);
Vue.use(Popconfirm);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
