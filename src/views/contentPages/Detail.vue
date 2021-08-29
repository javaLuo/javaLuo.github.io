<template>
  <div class="page-detail" :v-loading="true" ref="pageDetail">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb>
        <el-breadcrumbItem to="/all">博客列表</el-breadcrumbItem>
        <el-breadcrumbItem :to="breadType.url">
          {{ breadType.title }}
        </el-breadcrumbItem>
        <el-breadcrumbItem>{{ blogNow.name }}</el-breadcrumbItem>
      </el-breadcrumb>
    </div>
    <div class="info">
      <div class="title">{{ blogNow.name }}</div>
      <div class="date">{{ blogNow.date }}</div>
    </div>
    <div
      ref="theBody"
      v-html="htmlData"
      class="the-body markdown-body editormd-html-preview"
    ></div>
    <div class="the-end">
      <img src="@/assets/feather.png" />
      <div>--<span>End</span>--</div>
    </div>
    <div id="gitalk-box" class="gitalk-box"></div>
  </div>
</template>

<script>
/** 文章的详情页 **/
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  nextTick,
} from "vue";
import { useRoute } from "vue-router";

import Gitalk from "gitalk";
import "gitalk/dist/gitalk.css";
import { masterName, issueName, client_id, client_secret } from "@/config";
import { blogs } from "@/config";
import ShowDown from "showdown";
const converter = new ShowDown.Converter({ tables: true });

export default {
  name: "name-detail",
  setup(props, context) {
    const route = useRoute();

    onMounted(() => {
      pageDetail.value.scrollTo(0, 0);
      getData(route.params.id);
      initGitTalk(); // 初始化评论
    });

    onBeforeUnmount(() => {
      document.title = "Logic's Blog";
    });

    /** 正文数据相关 */
    const pageDetail = ref(null);
    const sourceData = ref(null);
    const htmlData = ref("");

    const getData = (id) => {
      if (!id) {
        return null;
      }
      if (window.blogs && window.blogs[id]) {
        sourceData.value = window.blogs[id].replace(/\\`/g, "`");
        return;
      }
      const dom = document.createElement("script");
      dom.type = "text/javascript";
      dom.src = `blogs/${id}.js`;
      dom.onload = () => {
        sourceData.value = window.blogs[id].replace(/\\`/g, "`");
      };
      dom.onerror = () => {
        context.$message.error("文章加载失败，请刷新页面");
      };
      document.body.appendChild(dom);
    };

    // 当前博客的基础信息，标题/时间 等
    const blogNow = computed(
      () => blogs.find((item) => item.id === route.params.id) || {}
    );
    const breadType = computed(() => {
      switch (blogNow.value.type) {
        case 1:
          return { title: "文章列表", url: "/live" };
        case 2:
          return { title: "个人作品", url: "/works" };
        case 3:
          return { title: "日志列表", url: "/article" };
        default:
          return { title: "文章列表", url: "/live" };
      }
    });
    watch(
      blogNow,
      (newV) => {
        document.title = `${newV.name} | Logic's Blog`;
      },
      {
        immediate: true,
      }
    );

    watch(sourceData, (newV) => {
      htmlData.value = converter.makeHtml(newV);
      nextTick(() => {
        const allCodesDom = document.querySelectorAll("pre code");
        Array.from(allCodesDom).forEach((item) => {
          window.hljs.highlightBlock(item);
        });
      });
    });

    /** 初始化评论 */
    const initGitTalk = () => {
      if (!route.params.id) {
        return;
      }

      const gitalk = new Gitalk({
        clientID: client_id, // github授权ID
        clientSecret: client_secret, // github授权证明
        id: route.params.id, // 文章唯一标识
        owner: masterName, // 评论存储项目的所有者github名称
        repo: issueName, // 评论存储项目
        admin: [masterName], // 拥有写权利的github名称，即可以新建issue的帐号
        title: `${document.title} ${route.params.id}`, // 新建的issue的标题
        distractionFreeMode: false, // 是否开启全屏遮罩效果
      });

      gitalk.render("gitalk-box");
    };

    return {
      blogNow,
      breadType,
      htmlData,
      pageDetail,
    };
  },
};
</script>

<style lang="less">
.page-detail {
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  .the-body {
    padding: 0 !important;
    overflow-x: hidden;
    font-size: 18px;
    img {
      border-radius: 8px;
    }
  }
  .markdown-body {
    pre {
      font-size: 100% !important;
      word-break: break-all;
      word-wrap: break-word;
      white-space: pre-wrap;
      code {
        word-break: break-all;
        word-wrap: break-word;
        white-space: pre-wrap;
      }
    }
  }
  .info {
    letter-spacing: 1px;
    .title {
      font-size: 32px;
      letter-spacing: 1px;
    }
    .date {
      margin-top: 8px;
      font-size: 16px;
      color: #888;
    }
    border-bottom: solid 1px #e0e0e0;
    padding-bottom: 24px;
    margin-bottom: 24px;
  }
  .loading-box {
    padding: 48px;
    text-align: center;
    display: block;
    margin: 0 auto;
    color: #888;
    font-size: 14px;
    div {
      margin-top: 8px;
    }
  }
  .the-end {
    padding: 50px 0;
    text-align: center;
    font-size: 14px;
    color: #ccc;
    img {
      margin-top: 40px;
      height: auto;
      width: 36px;
      transform: translateX(8px);
    }
    & > div {
      margin-top: 10px;
      span {
        padding: 0 24px;
      }
    }
  }
  .bread {
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    i {
      margin-right: 8px;
      margin-left: -5px;
      color: #0acb79;
    }
    .el-breadcrumb {
      line-height: 16px;
    }
  }
}
</style>
