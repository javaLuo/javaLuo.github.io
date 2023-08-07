import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import All from "../views/contentPages/All.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
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
          component: () => import("../views/contentPages/Live.vue"),
        },
        {
          path: "works", // 个人作品
          name: "works",
          component: () => import("../views/contentPages/Works.vue"),
        },
        {
          path: "article", // 日志列表
          name: "article",
          component: () => import("../views/contentPages/Article.vue"),
        },
        {
          path: "tags", // tag分类
          name: "class",
          component: () => import("../views/contentPages/Class.vue"),
        },
        {
          path: "detail/:id", // 文章详情页
          name: "detail",
          component: () => import("../views/contentPages/Detail.vue"),
        },
        {
          path: "about", // 关于我
          name: "about",
          component: () => import("../views/About.vue"),
        },
        {
          path: "share", // 分享
          name: "share",
          component: () => import("../views/Share.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next)=>{
  console.log('路由变化：', to, from, next);

  // 从detail页跳
  if(from.name === 'detail'){
    const id = from.params.id;
    console.log('id', id);
    const vt = document.startViewTransition(async ()=>{
      next();

      await new Promise((res, rej)=>{
        setTimeout(()=>{
          const dom = document.getElementById(id);
          console.log('dom', dom);
          if(dom){
            dom.style.viewTransitionName = 'title';
          }
          res();
        }, 100);
      });

    });
    vt.finished.finally(()=>{
      const dom = document.getElementById(id);
      if(dom){
        dom.style.viewTransitionName = '';
      }
    });
    // next();
  }else{
    next();
  }
});

export default router;
