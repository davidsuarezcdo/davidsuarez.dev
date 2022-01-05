import Vue from "vue";
import "./plugins/fontawesome";
import "./plugins/bootstrap";
import "./plugins/google_analytics";
import App from "./App.vue";
import i18n from "./plugins/i18n";
import "./prototypes.extends";

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
