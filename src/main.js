import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "jquery/dist/jquery.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
