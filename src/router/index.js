import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import All from "../views/contentPages/All.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "all", // 所有动态
        name: "all",
        alias: "/",
        component: All,
      },
      {
        path: "live", // 文章列表
        name: "live",
        component: () =>
          import(
            /* webpackChunkName: "live" */ "../views/contentPages/Live.vue"
          ),
      },
      {
        path: "works", // 个人作品
        name: "works",
        component: () =>
          import(
            /* webpackChunkName: "works" */ "../views/contentPages/Works.vue"
          ),
      },
      {
        path: "article", // 日志列表
        name: "article",
        component: () =>
          import(
            /* webpackChunkName: "article" */ "../views/contentPages/Article.vue"
          ),
      },
      {
        path: "tags", // tag分类
        name: "class",
        component: () =>
          import(
            /* webpackChunkName: "tags" */ "../views/contentPages/Class.vue"
          ),
      },
      {
        path: "detail/:id", // 文章详情页
        name: "detail",
        component: () =>
          import(
            /* webpackChunkName: "detail" */ "../views/contentPages/Detail.vue"
          ),
      },
      {
        path: "about", // 关于我
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "share", // 分享
        name: "share",
        component: () =>
          import(/* webpackChunkName: "share" */ "../views/Share.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
