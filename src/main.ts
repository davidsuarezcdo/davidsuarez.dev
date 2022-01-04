import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/axios";
import "./plugins/bootstrap";
import App from "./App.vue";
import i18n from "./plugins/i18n";

import "../node_modules/devicon/devicon.min.css";

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
