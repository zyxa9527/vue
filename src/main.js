// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

//import router from "./router";
import VueRouter from "vue-router";
import Hello from "./components/Helloworld.vue";
import CtoF from "./components/CtoF.vue";
import learnComponent from "./pages/learnComponent.vue";
import store from "./store";
import count from "./pages/count.vue";
//Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: "history",
  base: __dirname,
  // routre 表
  routes: [
    {
      path: "/hello",
      name: "hello",
      component: Hello
    },
    {
      path: "/ctof",
      name: "ctof",
      component: CtoF
    },
    {
      path: "/learnComponent",
      name: "learnComponent",
      component: learnComponent
    },
    {
      path: "/count",
      name: "count",
      component: count
    },
    // router 轉址
    { path: "/*", redirect: "/count" }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
  //components: { App },
});
