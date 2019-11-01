import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "normalize.css/normalize.css";
import "../public/icon/iconfont.css";
import "../public/swiper/swiper.min.css";
import "../public/swiper/swiper.min.js";
import "amfe-flexible";

Vue.use(Vant);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
