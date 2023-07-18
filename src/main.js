import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import '@/styles/global.less';

import {
  ElButton,
  ElMessage,
  ElInput,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElPagination,
  ElTooltip,
  ElIcon,
} from "element-plus";

const app = createApp(App);
app.$message = ElMessage;
app
  .use(createPinia())
  .use(ElButton)
  .use(ElInput)
  .use(ElBreadcrumb)
  .use(ElBreadcrumbItem)
  .use(ElPagination)
  .use(ElTooltip)
  .use(ElIcon);

app.use(router);
app.mount("#app");
