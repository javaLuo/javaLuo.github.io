<template>
  <div id="listBox"
       class="list-box"
       @mousedown="onBoxMouseDown($event)"
       @mousewheel="onBoxMouseWheel($event)">
    <ul tag="ul"
        ref="ulDom"
        :class="{ smooth: isSmooth }"
        :style="`transform: translate(${leftOffset}, -50%) rotateY(-30deg) translateZ(${offsetUl}px)`">
      <li v-for="item in listData"
          :key="item.title"
          :class="{ isNow: item.offsetZ + offsetUl === 0, isHide: item.isHide }"
          :style="`transform:translateZ(${item.offsetZ}px);${makeOpacity(item.offsetZ)}`">
        <div>{{ item.indexTrue }}:{{ item.title }}</div>
        <div>{{ item.date }}</div>
        <div>
          <div>{{ item.info }}</div>
        </div>
        <figure class="pic"
                :style="`background-image:url(${item.pic})`" />
      </li>
    </ul>
    <div class="control-box">
      <a-slider :defaultValue="1"
                :min="1"
                :max="canUseData.length" />
      <input :value="searchInput"
             @input="onSearchInput" />
    </div>
  </div>
</template>
<script>
let oneOffset = 200;
let limitIndex = 0;
let limitSize = 12;
let resetOffsetTimer = null;

let inertiaTimer = null;
let isDown = false;
let oldPageX = 0; // 鼠标移动过程中，不停的记录上一次的位置
let pageX = 0; // 鼠标本次按下时，鼠标的x位置
let pageOffsetXEnd = 0;
let direction = 0; // 用于阻尼惯性: 表示最近移动的方向，>0向右，<0向左
let startTime = 0; // 用于阻尼惯性: 表示记录速度的起始时间
let startX = 0; // 用于阻尼惯性: 记录速度的起始坐标x
let hideZZ = 0;
import dayjs from "dayjs";
export default {
  name: "listbox-com",
  data() {
    return {
      ulDom: null,
      startIndex: 0,
      endIndex: 10,
      offsetUl: 0, // ul的偏移
      isSmooth: false, // ul是否带transition
      leftOffset: "-60%", // 根据窗口大小对左边偏移的大小
      searchInput: "",
      hideZ: 0 // 搜索隐藏了几个，endIndex就向后补偿几个
    };
  },
  props: {
    sourceData: { type: Array, default: () => [] }
  },
  computed: {
    canUseData() {
      let data = this.sourceData;
      if (this.searchInput) {
        let hideZ = 0;
        const res = data.map((item, index) => {
          if (item.title.includes(this.searchInput)) {
            return {
              ...item,
              indexTrue: index,
              offsetZ: -index * oneOffset + hideZ
            };
          }
          hideZ += oneOffset;
          return {
            isHide: true,
            ...item,
            indexTrue: index,
            offsetZ: -index * oneOffset
          };
        });
        return res;
      }
      return data.map((item, index) => {
        return {
          ...item,
          indexTrue: index,
          offsetZ: -index * oneOffset
        };
      });
    },
    hideZIndex() {
      return this.canUseData.filter(item => item.isHide).length;
    },
    listData() {
      return this.canUseData.slice(
        this.startIndex,
        this.endIndex + this.hideZIndex
      );
    },
    // ul能移动的范围
    offsetMax() {
      return (this.canUseData.length - 1) * oneOffset + 1; // -1是因为最后一个后面的距离不要，+1是为了算摩擦系数时，基数至少是从1开始
    },
    // 实时摩擦系数
    rub() {
      let r = 1.2;
      if (this.offsetUl < -1) {
        r = -this.offsetUl * r;
      } else if (this.offsetUl > this.offsetMax) {
        r = (this.offsetUl - this.offsetMax) * r;
      }
      return r;
    }
  },
  mounted() {
    this.ulDom = this.$refs.ulDom;
    document.addEventListener("mousemove", this.onBoxMouseMove, true);
    document.addEventListener("mouseup", this.onBoxMouseUp, true);
    window.addEventListener("resize", this.onWindowResize, false);
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.onBoxMouseMove, true);
    document.removeEventListener("mouseup", this.onBoxMouseUp, true);
    window.removeEventListener("resize", this.onWindowResize, false);
  },
  watch: {
    offsetUl: {
      handler(newV) {
        const lun = Math.max(
          0,
          Math.floor(this.offsetUl / (oneOffset * limitSize))
        );
        this.startIndex = Math.max(0, lun * limitSize - 1);
        this.endIndex = lun * limitSize + limitSize + limitSize;
      },
      immediate: true
    }
  },
  methods: {
    onWindowResize(e) {
      this.leftOffset = window.innerWidth > 1640 ? "-60%" : "-40%";
    },
    onSearchInput(e) {
      this.searchInput = e.target.value;
      this.offsetUl = 0;
    },
    onBoxMouseDown(e) {
      cancelAnimationFrame(inertiaTimer);
      isDown = true;
      pageX = e.pageX;
      direction = 0; // 表示最近移动的方向，>0向右，<0向左
      startTime = 0; // 表示记录速度的起始时间，用于阻尼惯性
      startX = 0; // 记录速度的起始坐标x，用于阻尼惯性
      pageOffsetXEnd = this.offsetUl;
    },
    onBoxMouseUp(e) {
      if (isDown) {
        isDown = false;
        pageX = 0;
        this.inertia((startX - e.pageX) / (Date.now() - startTime));
      }
    },
    onBoxMouseMove(e) {
      if (isDown) {
        e.preventDefault();
        // 用户向左移动，direction < 0, 向右移动direction > 0
        const move = e.pageX - oldPageX;
        // 方向有变 或 移动缓慢，则重制起始时间
        if (direction * move < 0 || Math.abs(move) <= 1) {
          startTime = Date.now();
          startX = e.pageX;
        }

        direction = move;
        oldPageX = e.pageX;

        this.offsetUl = pageOffsetXEnd + pageX - e.pageX;
      }
    },
    onBoxMouseWheel(e) {
      e.preventDefault();

      this.offsetUl =
        this.offsetUl - (e.wheelDeltaX || e.wheelDeltaY) / this.rub;
      clearTimeout(resetOffsetTimer);
      resetOffsetTimer = setTimeout(() => {
        this.resetOffset();
      }, 100);
    },
    // 计算当前透明度
    makeOpacity(z) {
      let opacity = 1;
      const offset = this.offsetUl + z;
      if (offset < -(limitSize - 3) * oneOffset) {
        opacity = (offset + (limitSize - 3) * oneOffset + 600) / 600;
      } else if (offset > 0) {
        opacity = (200 - offset) / 200;
      }
      return `opacity:${opacity};pointer-events:${
        opacity === 1 ? "auto" : "none"
      }`;
    },
    // 粘性归位
    resetOffset() {
      this.isSmooth = true;
      const temp = Math.abs(this.offsetUl % oneOffset); // 除余

      if (this.offsetUl < 0) {
        this.offsetUl = 0;
      } else if (this.offsetUl > oneOffset * (this.canUseData.length - 1)) {
        this.offsetUl = oneOffset * (this.canUseData.length - 1);
      } else if (temp > oneOffset / 2) {
        this.offsetUl += oneOffset - temp;
      } else {
        this.offsetUl -= temp;
      }

      setTimeout(() => {
        this.isSmooth = false;
      }, 200);
    },
    // 开始惯性滑动 参数v速度
    inertia(v) {
      inertiaTimer = requestAnimationFrame(() => this.inertia(v / 1.1));
      this.offsetUl += v * 20;
      if (Math.abs(v) < 0.1) {
        cancelAnimationFrame(inertiaTimer);
        this.resetOffset();
      }
    }
  }
};
</script>
<style lang="less">
.list-box {
  height: 100%;
  perspective: 900px;
  perspective-origin: 30% 50%;
  overflow: hidden;
  & > ul {
    transform-style: preserve-3d;
    width: 800px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 20%;

    &.smooth {
      transition: transform 256ms;
    }
    & > li {
      transform-style: preserve-3d;
      user-select: none;
      width: 100%;
      height: 100%;
      border: solid 3px #fff;
      position: absolute;
      padding: 10px;
      top: 0;
      left: 0;
      box-shadow: 0 0 20px #aaa;
      background-color: rgba(255, 255, 255, 0.85);
      transition: transform 256ms, clip-path 256ms;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      cursor: pointer;
      &.isHide {
        // opacity: 0;
        pointer-events: none;
        clip-path: polygon(-10% 50%, 90% 50%, 90% 50%, -10% 50%);
      }
      .pic {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        margin: 0;
        background-size: cover;
        clip-path: polygon(0 0, 50% 0, 90% 100%, 0 100%);
        transition: clip-path 256ms;
      }
      & > div {
        transform-style: preserve-3d;
        letter-spacing: 2px;
        transition: all 256ms;
        transform-origin: right center;
        text-align: right;
        &:nth-child(1) {
          font-size: 22px;
          color: #00a9cb;
          transition-delay: 64ms;
        }
        &:nth-child(2) {
          font-size: 14px;
          color: #bbb;
          margin-top: 5px;
          transition-delay: 32ms;
        }
        &:nth-child(3) {
          font-size: 16px;
          color: #999;
          margin-top: 10px;

          display: flex;
          justify-content: flex-end;

          & > div {
            text-align: left;
            max-width: 50%;
            padding: 10px;
            border-radius: 4px;
            transition: background-color 256ms;
          }
        }
      }
      &.isNow:hover {
        & > div {
          &:nth-child(1) {
            color: #00d5ff;
            transform: rotateY(15deg) translateZ(5px);
            text-shadow: 5px 5px 8px #222;
          }
          &:nth-child(2) {
            color: #f0f0f0;
            transform: rotateY(15deg) translateZ(10px);
            text-shadow: 5px 5px 8px #222;
          }
          &:nth-child(3) {
            color: #f0f0f0;
            transform: rotateY(15deg) translateZ(15px);
            & > div {
              background-color: rgba(0, 0, 0, 0.6);
            }
          }
        }
        .pic {
          clip-path: polygon(0 0, 100% 0, 140% 100%, 0 100%);
          transform: scale(1, 1);
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 80%;
        height: 1px;
        left: 10%;
        bottom: -50px;

        transform: rotateX(90deg);
        box-shadow: 0 0 45px #000;
      }
    }
  }
  .control-box {
    position: absolute;
    left: 20%;
    top: calc(50% + 350px);
    width: 300px;
  }
}
</style>
