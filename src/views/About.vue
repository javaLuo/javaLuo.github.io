<template>
  <div class="page-about">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb>
        <el-breadcrumbItem>关于我</el-breadcrumbItem>
      </el-breadcrumb>
    </div>
    <div class="info-box">
      我是这沧海一粟，是仅在公元21世纪这几十年中存在的生命体。
      <br />要问我生命的意义，我便会回答：
      <br />万物均朝着“生”的方向发展，碳基生命无法长久维持，细胞终会衰老，所以需要繁衍后代生息不止。
      <br />而这一切的目的都是为了探索未知智慧，一直到达那个永恒的终极答案。
      <br />倘若有一天人类真的知道了终极答案，那么那个答案一定会反过来告诉我们一切发生的原因。
      <br />这就是存在的意义，是万物繁衍生息，本能向“生”的目的。
      <br />
    </div>
    <div class="info-box link">
      <div class="title">Logic</div>
      <div>前端开发工程师 目前就职于上海</div>
      <div>
        GitHub:
        <a href="https://github.com/javaLuo" target="_blank" rel="noopener me"
          >https://github.com/javaLuo</a
        >
      </div>
      <div>
        邮箱:
        <a href="mailto:376693576@qq.com" target="_blank" rel="noopener me"
          >376693576@qq.com</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
};
</script>
<style lang="less">
.page-about {
  .bread {
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    i {
      margin-right: 8px;
      margin-left: -5px;
      color: #0acb79;
    }
  }
  .info-box {
    color: #888;
    padding: 0 20px;
    margin-bottom: 20px;
    &.link > div {
      margin-bottom: 12px;
    }
    .title {
      color: #222;
    }
    a {
      color: #5b83ce;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
