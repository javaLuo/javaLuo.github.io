<template>
  <div id="listBox" class="list-box" @mousedown="onBoxMouseDown($event)" @mousewheel="onBoxMouseWheel($event)">
    <ul>
      <li @mouseup.stop="onClickLi(index)" v-for="(item, index) in new Array(15)" :key="index" :style="makeZ(index)" v-html="makeHtml(index)"></li>
    </ul>
  </div>
</template>
<script>
let listBox;
let listNum = 15; // 一次显示多少个
let indexNow = 0; // 当前处于首个位置的真实下标
let oldPageX = 0; // 鼠标移动过程中，不停的记录上一次的位置
let pageX = 0; // 鼠标本次按下时，鼠标的x位置
let direction = 0; // 表示最近移动的方向，>0向右，<0向左
let startTime = 0; // 表示记录速度的起始时间，用于阻尼惯性
let startX = 0; // 记录速度的起始坐标x，用于阻尼惯性
let inertiaTimer = null;
let resetOffsetTimer = null;
let isDown = false;
let oneOffset = 200;
let pageOffsetXEnd = 0; // 上一次最终的偏移值
let isMoving = false; // 是否在移动中
import dayjs from "dayjs";
export default {
  name: "listbox-com",
  data() {
    return {
      pageOffsetX: 0,
    };
  },
  props: {
    sourceData: { type: Array, default: () => [] },
  },
  computed: {
    showData() {
      const d = [...this.sourceData];

      d.sort((a, b) => {
        return dayjs(b.date).$d - dayjs(a.date).$d;
      });
      return d;
    },
  },
  mounted() {
    listBox = document.getElementById("listBox");
    document.addEventListener("mousemove", this.onBoxMouseMove, true);
    document.addEventListener("mouseup", this.onBoxMouseUp, true);
    window.addEventListener("resize", this.onWindowResize, false);
    this.onWindowResize();
  },
  beforeDestroy() {
    document.removeEventListener("mousemove", this.onBoxMouseMove, true);
    document.removeEventListener("mouseup", this.onBoxMouseUp, true);
    window.removeEventListener("resize", this.onWindowResize, false);
  },
  methods: {
    onWindowResize(e) {
      let temp = window.innerWidth > 1640 ? 200 : 500;
      listBox.style.setProperty("--transZ", `${Math.max((temp / 1920) * window.innerWidth - temp + 200, 0)}px`);
    },
    onBoxMouseDown(e) {
      cancelAnimationFrame(inertiaTimer);
      isDown = true;
      isMoving = false;
      pageX = e.pageX;
      direction = 0; // 表示最近移动的方向，>0向右，<0向左
      startTime = 0; // 表示记录速度的起始时间，用于阻尼惯性
      startX = 0; // 记录速度的起始坐标x，用于阻尼惯性
    },
    onBoxMouseWheel(e) {
      // isDown = true;
      e.preventDefault();
      let modulus = 1.2;
      if (this.pageOffsetX > (this.showData.length - 1) * oneOffset || this.pageOffsetX < -(listNum * oneOffset) / 3) {
        modulus = 12;
      }
      this.pageOffsetX = pageOffsetXEnd - (e.wheelDeltaX || e.wheelDeltaY) / modulus;
      pageOffsetXEnd = this.pageOffsetX;
      this.decideIndexNow();
      clearTimeout(resetOffsetTimer);
      resetOffsetTimer = setTimeout(() => {
        this.resetOffset();
      }, 100);
      // this.onBoxMouseMove(e);
    },
    onBoxMouseUp(e) {
      if (isDown) {
        isDown = false;
        pageOffsetXEnd = this.pageOffsetX;
        pageX = 0;
        this.inertia((startX - e.pageX) / (Date.now() - startTime));
      }
    },
    // 开始惯性滑动 参数v速度
    inertia(v) {
      inertiaTimer = requestAnimationFrame(() => this.inertia(v / 1.1));
      this.pageOffsetX = pageOffsetXEnd + v * 20;
      pageOffsetXEnd = this.pageOffsetX;
      this.decideIndexNow();
      if (Math.abs(v) < 0.1) {
        cancelAnimationFrame(inertiaTimer);
        this.resetOffset();
      }
    },

    // 粘性归位
    resetOffset() {
      listBox.classList.add("upping");
      const temp = indexNow * oneOffset;
      this.pageOffsetX = this.pageOffsetX - temp > oneOffset / 2 ? temp + oneOffset : temp;
      pageOffsetXEnd = this.pageOffsetX;
      setTimeout(() => {
        listBox.classList.remove("upping");
      }, 256);
    },

    onBoxMouseMove(e) {
      if (isDown) {
        isMoving = true;
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

        this.pageOffsetX = pageOffsetXEnd + pageX - e.pageX;
        this.decideIndexNow();
      }
    },

    // 根据偏移确定当前indexNow是几
    decideIndexNow() {
      indexNow = Math.min(Math.max(Math.floor(this.pageOffsetX / oneOffset), 0), this.showData.length - 2);
      // -2 是因为，下标从0开始，所以先-1，又最后一项后面的偏移不需要，所以再-1
    },

    // 根据indexNow确定偏移
    decideOffsetByIndexNow(indexNowTemp) {
      this.pageOffsetX = indexNowTemp * oneOffset;
      pageOffsetXEnd = this.pageOffsetX;
      this.decideIndexNow();
    },

    // 算当前这个下标是第几轮 和 真实位置
    makeLun(index) {
      const lun = Math.floor((listNum - 1 + (indexNow - index)) / listNum);
      const indexTrue = lun * listNum + index;
      return { lun, indexTrue };
    },
    /**
     * index * -oneOffset 当前原始位置
     * pageOffsetX 鼠标偏移
     * listNum-1 第1轮做偏移补偿，第0个是9，第1个是8，第2个是7...
     * indexNow - index 当前偏移项 - 当前项的下标 / listNum总长度，算当前这一项是第几轮
     * 一轮的总偏移：listNum * oneOffset
     * y = -x (x<0); y=x(x>0), y = |x|
     * **/
    makeZ(index) {
      const { lun, indexTrue } = this.makeLun(index);
      const offsetNow = index * -oneOffset + this.pageOffsetX - lun * (listNum * oneOffset);

      let opacity = 1;
      if (indexTrue > this.showData.length - 1) {
        opacity = 0;
      } else if (offsetNow > 0) {
        opacity = (200 - offsetNow) / 200;
      } else if (offsetNow < -oneOffset * (listNum - 1)) {
        opacity = (oneOffset * (listNum - 1) + 200 + offsetNow) / 200;
      }
      return `transform: translateZ(${offsetNow}px);opacity:${opacity};pointer-events:${!!opacity ? "auto" : "none"}`;
    },
    makeHtml(index) {
      const data = this.showData[this.makeLun(index).indexTrue];
      if (!data) {
        return "";
      }
      let html = `<div>${data.title}</div><div>${data.date}</div><div>${data.info}</div>`;
      if (data.pic) {
        html = `${html}<img class="pic" src="${data.pic}" />`;
      }
      return html;
    },

    onClickLi(index) {
      if (!isMoving) {
        const indexTrue = this.makeLun(index).indexTrue;
        this.decideOffsetByIndexNow(indexTrue);
      }
    },
  },
};
</script>
<style lang="less">
.list-box {
  --transZ: 200px;
  height: 100%;
  perspective: 1000px;
  border-right: solid 1px #0f0;
  flex: auto;
  &.upping {
    & > ul > li {
      transition: transform 256ms;
    }
  }
  & > ul {
    transform-style: preserve-3d;
    width: 600px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -50%) rotateY(-30deg) translateZ(var(--transZ));
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
      transition: top 256ms, left 256ms;
      cursor: pointer;
      .pic {
        position: absolute;
        z-index: -1;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        clip-path: polygon(70% 0, 100% 0, 100% 100%, 25% 100%);
        transition: clip-path 256ms;
      }
      & > div {
        transform-style: preserve-3d;
        letter-spacing: 2px;
        transition: all 256ms;
        transform-origin: right center;
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
          width: 60%;
          padding: 10px;
          border-radius: 4px;
        }
      }
      &:hover {
        & > div {
          &:nth-child(1) {
            color: #00d5ff;
            transform: rotateY(5deg) translateZ(5px);
            text-shadow: 2px 3px 10px #000;
          }
          &:nth-child(2) {
            color: #f0f0f0;
            transform: rotateY(5deg) translateZ(10px);
            text-shadow: 0 0 10px #000;
          }
          &:nth-child(3) {
            color: #f0f0f0;
            transform: rotateY(5deg) translateZ(15px);
            background-color: rgba(0, 0, 0, 0.6);
          }
        }
        .pic {
          clip-path: polygon(0 0, 100% 0, 100% 100%, -70% 100%);
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
}
</style>
