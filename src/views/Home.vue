<template>
  <div id="home" class="home" @wheel="onMouseWheel">
    <audio
      v-if="isPc"
      class="audio"
      src="https://isluo.com/imgs/rain.mp3"
      loop
      preload
      @canplaythrough="onCanPlay"
      ref="refMp3Dom"
    ></audio>
    <div id="scroller" class="scroller">
      <ul class="scroll-wrapper">
        <li v-if="isPc" class="scroll-page">
          <Page1 :pageNow="refPageNow" @onDownClick="onClickScroll" />
        </li>
        <li class="scroll-page">
          <Page2
            :pageNow="refPageNow"
            :isPlaying="isPlaying"
            @onDownClick="onClickScroll"
            @onPlayOrStop="onPlayOrStop"
          />
        </li>
        <li v-if="isPc" class="scroll-page foot-page">
          <Page3 :pageNow="refPageNow" :hi="text" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, inject, watch, onMounted, onBeforeUnmount } from "vue";
import IScroll from "iscroll";
import useMp3 from "@/hooks/mp3.js";
import useHi from "@/hooks/hi";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";

let scrollDom;
let scrolling; // 是否正在滚动中
const mp3Dom = {
  // mp3控制
  canplay: false,
  a: null,
};

export default {
  name: "Home",
  components: {
    Page1,
    Page2,
    Page3,
  },
  setup() {
    const isPc = inject("isPc"); // 是否是PC端
    const refMp3Dom = ref();
    const { onPlay, onPause, onCanPlay, onSetPlay, isPlaying, init, isStop } =
      useMp3();
    const { text, getHiData } = useHi();

    onMounted(() => {
      init(refMp3Dom);
      initScroll();
    });

    onBeforeUnmount(() => {
      scrollDom && scrollDom.destroy();
    });

    // 翻页相关
    const refPageNow = ref(0); // 当前页码
    const initScroll = () => {
      scrollDom = new IScroll("#scroller", {
        snap: true,
        bounceEasing: {
          style: "cubic-bezier(1,0.1,0.1,1)",
        },
        bounceTime: 1000,
        preventDefault: true,
        disablePointer: true,
      });
      scrollDom.on("scrollEnd", () => {
        scrolling = false;
      });
      document.body.classList.add("page0");
    };

    /** 监听滚轮事件处理页面滚动 **/
    const onMouseWheel = (e) => {
      console.log("e", e);
      const f = e.wheelDeltaY || -e.deltaY || e.wheelDelta;
      if (scrolling) {
        return;
      }

      if (f < 0 && refPageNow.value < 2) {
        // 向下滚动
        scrolling = true;
        refPageNow.value++;
        scrollDom && scrollDom.goToPage(1, refPageNow.value, 1000);
      } else if (f > 0 && refPageNow.value > 0) {
        // 向上滚动
        scrolling = true;
        refPageNow.value--;
        scrollDom && scrollDom.goToPage(1, refPageNow.value, 1000);
      }
    };

    /** 手动点击跳转页面 **/
    const onClickScroll = (p) => {
      if (refPageNow.value === p) {
        return;
      }
      scrolling = true;
      refPageNow.value = p;
      scrollDom && scrollDom.goToPage(1, refPageNow.value, 1000);
    };

    const onPlayOrStop = (type) => {
      onSetPlay(type);
    };

    watch(refPageNow, (newV) => {
      if (newV !== 0 && !isStop.value) {
        onPlay();
        document.body.classList.remove("page0");
      } else {
        onPause();
        document.body.classList.add("page0");
      }
      if (newV === 2 && isPc) {
        getHiData();
      }
    });

    return {
      isPc,
      refPageNow,
      mp3Dom,
      text,
      isPlaying,
      onCanPlay,
      onMouseWheel,
      onClickScroll,
      onPlayOrStop,
      refMp3Dom,
    };
  },
};
</script>

<style scoped lang="less">
.home {
  background-color: #222;
  overflow: hidden;
  .scroller {
    height: 100vh;
    min-height: 300px;
    display: block;
    overflow: hidden;
    .scroll-wrapper {
      position: relative;
      display: block;
      margin: 0;
      padding: 0;
      width: 100%;
      .scroll-page {
        display: block;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        min-height: 300px;
        background-color: #fcfcfc;
        &.foot-page {
          height: 300px;
        }
      }
    }
  }
}
</style>
