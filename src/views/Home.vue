<template>
  <div id="home" class="home" @mousewheel="onMouseWheel" @DOMMouseScroll="onMouseWheel">
    <audio
      v-if="isPc"
      class="audio"
      src="https://isluo.com/imgs/rain.mp3"
      loop
      preload
      @canplaythrough="onCanPlay"
      id="audio1"
    ></audio>
    <div id="scroller" class="scroller">
      <ul class="scroll-wrapper">
        <li v-if="isPc" class="scroll-page">
          <Page1 :pageNow="pageNow" @onDownClick="onClickScroll"></Page1>
        </li>
        <li class="scroll-page">
          <Page2 :pageNow="pageNow" @onDownClick="onClickScroll"></Page2>
        </li>
        <li v-if="isPc" class="scroll-page foot-page">
          <Page3 :pageNow="pageNow" :hi="hi"></Page3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { isPc } from "../util/tools";
import IScroll from "iscroll";
import Page1 from "./homePages/Page1.vue";
import Page2 from "./homePages/Page2.vue";
import Page3 from "./homePages/Page3.vue";
import { mapState } from "vuex";
export default {
  name: "home",
  data: function() {
    return {
      isPc: isPc(),
      scrollDom: null,
      scrolling: false, // 是否正在滚动中
      pageNow: 0,
      mp3Dom: {
        // audio, 一个音轨
        canplay: false,
        a: null
      }
    };
  },
  components: {
    Page1,
    Page2,
    Page3
  },
  computed: {
    ...mapState({
      play: state => state.page.playing,
      hi: state => state.app.hi
    })
  },
  mounted: function() {
    /** PC端才初始化iscroll和声音 **/
    if (this.isPc) {
      this.initScroll();
      this.mp3Dom.a = document.getElementById("audio1");
      this.mp3Dom.a.volume = 0;
    }
  },
  beforeDestroy: function() {
    /** 离开前销毁iscroll实例 **/
    this.scrollDom && this.scrollDom.destroy();
  },
  methods: {
    /** 初始化页面全局滚动 **/
    initScroll() {
      this.scrollDom = new IScroll("#scroller", {
        snap: true,
        bounceEasing: {
          style: "cubic-bezier(1,0.1,0.1,1)"
        },
        bounceTime: 1000,
        preventDefault: true,
        disablePointer: true
      });
      this.scrollDom.on("scrollEnd", () => {
        this.scrolling = false;
      });
      document.body.classList.add("page0");
    },
    /** mp3 可以开始播放了 **/
    onCanPlay() {
      this.mp3Dom.canplay = true;
      // 为了在音乐末尾和开头无缝衔接
      this.mp3Dom.a.ontimeupdate = () => {
        if (this.mp3Dom.a.duration - 3 < this.mp3Dom.a.currentTime) {
          this.mp3Dom.a.currentTime = 2;
        }
      };
    },
    /** 监听滚轮事件处理页面滚动 **/
    onMouseWheel(e) {
      // console.log("有在触发吗,IE", e);
      const f = e.wheelDeltaY || -e.detail || e.wheelDelta;
      if (this.scrolling) {
        return;
      }

      if (f < 0 && this.pageNow < 2) {
        // 向下滚动
        this.scrolling = true;
        this.pageNow++;
        this.scrollDom && this.scrollDom.goToPage(1, this.pageNow, 1000);
        // console.log("滚动：", this.scrollDom);
      } else if (f > 0 && this.pageNow > 0) {
        // 向上滚动
        this.scrolling = true;
        this.pageNow--;
        this.scrollDom && this.scrollDom.goToPage(1, this.pageNow, 1000);
      }
    },
    /** 手动点击跳转页面 **/
    onClickScroll(p) {
      if (this.pageNow === p) {
        return;
      }
      this.scrolling = true;
      this.pageNow = p;
      this.scrollDom && this.scrollDom.goToPage(1, this.pageNow, 1000);
    },
    /** 音频事件，开始播放 **/
    onMp3Play() {
      if (this.mp3Dom.canplay) {
        this.mp3Dom.a.play();
        this.volumeUp();
      }
    },
    /** 音频事件，暂停播放 **/
    onMp3Pause() {
      this.volumeDown();
    },
    /** 音频音量调大 **/
    volumeUp() {
      clearTimeout(this.volumeTimer);
      if (this.mp3Dom.a.volume + 0.1 <= 1) {
        this.mp3Dom.a.volume += 0.1;
        this.volumeTimer = setTimeout(() => {
          this.volumeUp();
        }, 200);
      }
    },
    /** 音频音量调小 **/
    volumeDown() {
      clearTimeout(this.volumeTimer);
      if (this.mp3Dom.a.volume - 0.1 >= 0) {
        this.mp3Dom.a.volume -= 0.1;
        this.volumeTimer = setTimeout(() => {
          this.volumeDown();
        }, 200);
      } else {
        this.mp3Dom.a.pause();
      }
    }
  },
  watch: {
    pageNow(newV) {
      if (newV !== 0 && this.play) {
        this.onMp3Play();
        document.body.classList.remove("page0");
        if (newV === 2 && isPc) {
          this.$store.dispatch({
            type: "app/getHi"
          });
        }
      } else {
        this.onMp3Pause();
        document.body.classList.add("page0");
      }
    },
    play(newV) {
      if (newV) {
        this.onMp3Play();
      } else {
        this.onMp3Pause();
      }
    }
  }
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
