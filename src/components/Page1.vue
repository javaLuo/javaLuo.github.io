<template>
  <div class="page1" :class="{ show: isShow }">
    <img
      class="backImg"
      :class="{ show: isBackShow }"
      src="https://api.ixiaowai.cn/gqapi/gqapi.php"
      @load="onBackImgLoad"
    />
    <div class="shadow all_trans1s" :class="{ show: isBackShow }"></div>

    <div class="info-box">
      <span class="all_trans1s title">ISLUO BLOG</span>
      <div class="all_trans1s">hide in the city</div>
      <div class="all_trans1s">no card, no phone, no ID</div>
    </div>
    <img class="down" src="../assets/down.png" @click="onDownClick" />
  </div>
</template>

<script>
import { ref, toRefs, watch, onMounted } from "vue";

export default {
  name: "page1",
  props: {
    pageNow: Number,
  },
  setup(props, context) {
    const { pageNow } = toRefs(props);
    const isShow = ref(false); // 是否出现
    const isBackShow = ref(false); // 首页背景图是否加载

    const onDownClick = () => {
      context.emit("onDownClick", 1);
    };

    const onBackImgLoad = () => {
      isBackShow.value = true;
    };

    onMounted(() => {
      isShow.value = pageNow.value === 0;
    });

    watch(pageNow, (newV) => {
      isShow.value = newV === 0;
    });
    return {
      isShow,
      isBackShow,
      onDownClick, // 点击了向下的按钮，跳转到下面一页
      onBackImgLoad, // 背景图加载成功时执行
    };
  },
};
</script>

<style lang="less">
@keyframes animate-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(8px);
  }
}

.page1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
  height: 100%;
  background-color: #5e5e5e;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100px;
  background-image: url("../assets/logo-github.png");
  &.show {
    .info-box {
      & > div {
        transform: scale(1);
        letter-spacing: 1px;
        margin-bottom: 8px;
        opacity: 1;
      }
      .dot {
        opacity: 0.7;
      }
      .title {
        opacity: 1;
      }
    }
  }
  .backImg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 1s;
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0;
    &.show {
      opacity: 1;
    }
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    z-index: 1;
    &.show {
      opacity: 0.2;
    }
  }
  .info-box {
    flex: auto;
    margin-top: 20vh;
    color: #d0d0d0;
    text-align: center;
    z-index: 2;
    font-size: 12px;
    text-shadow: 0 0 12px #222;
    & > div {
      letter-spacing: 8px;
      transform: scale(2);
      opacity: 0;
      &:nth-child(2) {
        transition-delay: 0.4s;
      }
      &:nth-child(3) {
        transition-delay: 0.6s;
      }
    }
    .title {
      display: block;
      font-size: 36px;
      letter-spacing: 2px;
      color: #f0f0f0;
      margin-bottom: 32px;
      transition-delay: 0.6s;
      opacity: 0;
    }
  }
  .down {
    flex: none;
    margin-bottom: 8px;
    width: 16px;
    z-index: 2;
    cursor: pointer;
    padding: 12px 8px;
    animation: animate-down 1s;
    animation-iteration-count: infinite;
  }
}
</style>
