import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import {
  Pagination,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Tooltip
} from "element-ui";
Vue.use(Pagination);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Input);
Vue.use(Tooltip);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
