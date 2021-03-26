<template>
  <div class="menus" :class="{ mobile: !isPc }">
    <!-- 头部，移动端才显示 -->
    <div class="head">
      <div class="menu-btn" @click="onMenuTrigger">
        <i v-if="!menuOpen" class="el-icon-more"></i>
        <i v-if="menuOpen" class="el-icon-more-outline"></i>
      </div>
      <span>Logic's Blog</span>
    </div>
    <div class="menu-body">
      <div
        :class="`menu-body-box ${menuOpen ? 'show' : ''}`"
        @click="onMenuClose"
      >
        <div class="back-img-box" @click.stop></div>
        <CanvasBack v-if="isPc" :isPlaying="isPlaying"></CanvasBack>
        <div class="info-box" @click.stop>
          <div class="photo-box">
            <img class="photo" src="@/assets/pic.jpg" />
            <div
              v-if="isPc"
              class="playing"
              :class="{ stop: !isPlaying }"
            ></div>
            <div v-if="isPc" class="play-btn" @click="onPlayOrStop">
              <div class="line" :class="{ play: isPlaying }"></div>
            </div>
          </div>
          <div class="name">Logic</div>
          <div class="func">
            躲过了黑夜的那只鸟
            <br />最后也消失在漆黑里
          </div>
          <ul class="link">
            <li @click="onLinkClick('/')" @touchend="onLinkClick('/')">
              <div>{{ allLength }}</div>
              <div>全部</div>
            </li>
            <li @click="onLinkClick('/live')" @touchend="onLinkClick('/live')">
              <div>{{ liveLength }}</div>
              <div>笔记</div>
            </li>
            <li
              @click="onLinkClick('/works')"
              @touchend="onLinkClick('/works')"
            >
              <div>{{ workLength }}</div>
              <div>作品</div>
            </li>
            <li
              @click="onLinkClick('/article')"
              @touchend="onLinkClick('/article')"
            >
              <div>{{ articleLength }}</div>
              <div>日志</div>
            </li>
          </ul>
          <div class="tips">
            <span
              @click="onLinkClick('/about')"
              @touchend="onLinkClick('/about')"
              >about</span
            >
            <div class="line"></div>
            <span @click="onLinkClick('/tags')" @touchend="onLinkClick('/tags')"
              >tags</span
            >
            <div class="line"></div>
            <span
              @click="onLinkClick('/share')"
              @touchend="onLinkClick('/share')"
              >share</span
            >
          </div>
        </div>
        <img
          v-if="isPc"
          class="down"
          src="@/assets/down.png"
          @click="onDownClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import CanvasBack from "./CanvasBack.vue";
import { blogs } from "@/config";

export default {
  name: "Menus",
  components: {
    CanvasBack,
  },
  props: {
    isPlaying: Boolean,
  },
  setup(props, context) {
    const router = useRouter();
    const isPc = inject("isPc");
    const menuOpen = ref(isPc); // 菜单是否展开

    const liveLength = blogs.filter((item) => item.type === 1).length;
    const workLength = blogs.filter((item) => item.type === 2).length;
    const articleLength = blogs.filter((item) => item.type === 3).length;
    const allLength = blogs.length;

    const onPlayOrStop = () => {
      context.emit("onPlayOrStop", !props.isPlaying);
    };

    const onLinkClick = (url) => {
      router.push(url);
      // 移动端，自动关闭Menu
      if (!isPc) {
        menuOpen.value = false;
      }
    };

    const onMenuTrigger = () => {
      menuOpen.value = !menuOpen.value;
    };

    const onMenuClose = () => {
      // 只有移动端才能关闭
      if (!isPc) {
        menuOpen.value = false;
      }
    };

    const onDownClick = () => {
      context.emit("onClickScroll");
    };

    return {
      isPc,
      menuOpen,
      liveLength,
      workLength,
      articleLength,
      allLength,
      onPlayOrStop,
      onLinkClick,
      onMenuTrigger,
      onMenuClose,
      onDownClick,
    };
  },
};
</script>

<style scoped lang="less">
@keyframes go-round {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(8px);
  }
}

.menus {
  position: relative;
  flex: none;
  width: 25vw;
  min-width: 320px;
  max-width: 512px;
  height: 100%;
  box-sizing: border-box;
  z-index: 2;
  .head {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 45px;
    line-height: 45px;
    letter-spacing: 1px;
    text-align: center;
    background-color: #000;
    display: none;
    z-index: 10;
    color: #fff;
    .menu-btn {
      position: absolute;
      top: 0;
      left: 0;
      width: 45px;
      height: 45px;
      color: #fff;
      font-size: 18px;
    }
  }
  .menu-body {
    position: relative;
    width: 100%;
    height: 100%;
    .menu-body-box {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      pointer-events: none;
      opacity: 0;
      transition: opacity 256ms;
      backdrop-filter: blur(4px);
      &.show {
        opacity: 1;
        pointer-events: auto;
        .info-box {
          transform: translateX(0);
        }
        .back-img-box {
          transform: translateX(0);
        }
      }
      .down {
        position: absolute;
        bottom: 8px;
        left: 50%;
        margin-left: -8px;
        width: 16px;
        z-index: 2;
        cursor: pointer;
        padding: 12px 8px;
        animation: animate-down 1s;
        animation-iteration-count: infinite;
      }
    }
    .back-img-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: top center;
      background-image: url(../assets/menu.jpg);
      background-size: cover;
      transform: translateX(-100px);
      transition: transform 256ms;
    }
    .info-box {
      width: 100%;
      height: 100%;
      color: #fff;
      box-sizing: border-box;
      letter-spacing: 1px;
      text-align: center;
      z-index: 2;
      padding-top: 15vh;
      padding-bottom: 24px;
      overflow-y: auto;
      overflow-x: hidden;
      transform: translateX(-100px);
      transition: transform 256ms;
      .photo-box {
        position: relative;
        display: block;
        width: 26%;
        margin: 0 auto 0 auto;
        padding: 13% 0 13% 0;
        .photo {
          position: absolute;
          display: block;
          box-sizing: border-box;
          top: 2px;
          left: 2px;
          width: calc(100% - 3px);
          height: calc(100% - 3px);
          border-radius: 100%;
          border: solid 3px rgba(255, 255, 255, 0.8);
          z-index: 2;
        }
        .playing {
          position: absolute;
          top: 0;
          left: 0;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          background: linear-gradient(#3b79d8, rgba(0, 0, 0, 0));
          animation: go-round 2s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          opacity: 1;
          z-index: 1;
          &.stop {
            animation-play-state: paused;
          }
        }
        .play-btn {
          cursor: pointer;
          position: absolute;
          box-sizing: border-box;
          top: 2px;
          left: 2px;
          width: calc(100% - 3px);
          height: calc(100% - 3px);
          border-radius: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: all 200ms;
          z-index: 3;
          &:hover {
            opacity: 1;
          }
          .line {
            position: absolute;
            height: 25%;
            width: 25%;
            top: 37.5%;
            left: 30%;
            transition: all 200ms;
            transform: rotate(45deg);
            border: none;
            border-top: solid 1px #fff;
            border-right: solid 1px #fff;
            &.play {
              height: 40%;
              width: 10px;
              top: 30%;
              left: calc(50% - 5px);
              transform: rotate(0);
              border: none;
              border-left: solid 1px #fff;
              border-right: solid 1px #fff;
            }
          }
        }
      }
      .name {
        font-size: 24px;
        margin-top: 12px;
      }
      .func {
        font-size: 12px;
        margin-top: 6px;
      }
      .tips {
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
        span {
          cursor: pointer;
          transition: all 300ms;
          padding: 2px 6px;
          border-radius: 3px;
          &:hover {
            background-color: rgba(0, 0, 0, 0.5);
            color: #2df569;
          }
        }
        .line {
          height: 2px;
          width: 2px;
          margin: 0 2px;
          background-color: #2df569;
        }
      }
      .link {
        position: relative;
        display: flex;
        margin: 24px auto 0 auto;
        padding: 0;
        width: 80%;
        max-width: 300px;
        align-items: center;
        & > li {
          list-style: none;
          font-size: 12px;
          padding: 10px 0;
          width: 100%;
          box-sizing: border-box;
          display: block;
          position: relative;
          transition: all 200ms;
          cursor: pointer;

          & > div {
            &:first-child {
              font-size: 18px;
              font-weight: 600;
              color: #f0f0f0;
            }
            &:nth-child(2) {
              font-size: 12px;
              color: #f8f8f8;
            }
          }
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            border-radius: 3px;
            transform: translateY(-50%);
            width: 100%;
            height: 0;
            background-color: rgba(0, 0, 0, 0.4);
            transition: all 200ms;
            z-index: -1;
          }
          &:hover {
            & > div {
              color: #2df569 !important;
            }
            &::after {
              height: 100%;
            }
          }
        }
      }
    }
  }
  &.mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    .head {
      display: block;
    }
    .menu-body-box {
      position: absolute;
      top: 45px;
      left: 0;
      width: 100vw !important;
      height: calc(~"100vh - 45px") !important;
      .back-img-box {
        width: 80%;
        box-shadow: 3px 0 12px rgba(0, 0, 0, 0.2);
      }
      .info-box {
        width: 80%;
      }
    }
  }
}
</style>
