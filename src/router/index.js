import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "table",
    component: () =>
      //  import(/* webpackChunkName: "table" */ "../components/table/TableDemo8")
      //  import(/* webpackChunkName: "table" */ "../components/TextareaDemo")
      // import(/* webpackChunkName: "table" */ "../components/TooltipDemo")
      import(/* webpackChunkName: "table" */ "../components/TableHeaderFixDame")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
