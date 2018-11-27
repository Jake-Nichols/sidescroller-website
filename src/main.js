import Vue from "vue";
import App from "./App.vue";
import WebFont from "webfontloader";
import router from "./router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

// use async google fonts
WebFont.load({
  google: {
    families: ["IM Fell Double Pica:100,300,500,700"]
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
