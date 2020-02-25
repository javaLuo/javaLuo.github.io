import Vue from "vue";
import Vuex from "vuex";

import ModuleApp from "../modules/app.module";
import ModulePage from "../modules/page.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: ModuleApp,
    page: ModulePage
  }
});
