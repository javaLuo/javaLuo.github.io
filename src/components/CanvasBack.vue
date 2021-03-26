<template>
  <canvas class="canvas-back" ref="canvas"> </canvas>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from "vue";

let animateId;

export default {
  name: "Header",
  props: {
    isPlaying: Boolean,
  },
  setup(props) {
    const canvas = ref(null);
    const ctx = ref(null);
    const width = ref(0); // canvas当前的宽及像素
    const height = ref(0); // canvas当前的高及像素
    const theRain = ref([]); // 所有的雨

    onMounted(() => {
      ctx.value = canvas.value.getContext("2d");
      width.value = canvas.value.clientWidth;
      height.value = canvas.value.clientHeight;
      canvas.value.width = width.value;
      canvas.value.height = height.value;
      ctx.value.fillStyle = "transparent";
      ctx.value.lineCap = "round";
      window.addEventListener("resize", resize, false);
      init(250);
      animate();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animateId);
    });

    // 初始化
    const init = (many) => {
      /**
       * 总共分5层，近大远小，越远越模糊，越慢
       * 由远即近绘制
       * */
      for (let i = 0; i < many; i++) {
        let params = null;
        const rgb = Math.round(random(60, 150));
        if (i < many / 4) {
          params = {
            h: 60,
            w: 1,
            s: random(10, 15),
            color: `rgba(${rgb}, ${rgb}, ${rgb}, 0.4)`,
          };
        } else if (i < many / 3) {
          params = {
            h: 90,
            w: 1,
            s: random(15, 20),
            color: `rgba(${rgb}, ${rgb}, ${rgb}, 0.5)`,
          };
        } else if (i < many / 2) {
          params = {
            h: 120,
            w: 1,
            s: random(20, 25),
            color: `rgba(${rgb}, ${rgb}, ${rgb}, 0.6)`,
          };
        } else if (i < many / 1.5) {
          params = {
            h: 150,
            w: 1,
            s: random(25, 30),
            color: `rgba(${rgb}, ${rgb}, ${rgb}, 0.7)`,
          };
        } else {
          params = {
            h: 200,
            w: 2,
            s: random(30, 35),
            color: `rgba(${rgb}, ${rgb}, ${rgb}, 0.7)`,
          };
        }
        const temp = {
          x: random(-10, width.value + 10), // 当前起始点坐标X
          y: random(-1000, height.value + 1000), // 当前起始点坐标Y
          deg: random(-2, 5), // 斜率，偏移多少度
          h: params.h, // 雨丝的长度
          w: params.w, // 雨丝的宽度
          color: params.color, // 雨丝颜色
          s: params.s, // 雨移动速度
        };
        theRain.value.push(temp);
      }
    };

    // 取范围随机数
    const random = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    // windows大小被改变时重新设置canvas宽高
    const resize = () => {
      width.value = canvas.value.clientWidth;
      height.value = canvas.value.clientHeight;
      canvas.value.width = width.value;
      canvas.value.height = height.value;
    };

    // 画
    const drow = () => {
      const speed = props.isPlaying ? 1 : 20; // 非播放状态，所有运动变慢20倍
      ctx.value.clearRect(0, 0, width.value, height.value);
      for (let i = 0; i < theRain.value.length; i++) {
        const t = theRain.value[i];
        const deg = (Math.PI / 180) * t.deg;
        if (Math.abs(t.y) > height.value) {
          t.x = random(-10, width.value + 10);
          t.y = -t.h;
        } else {
          t.x = (Math.sin(deg) * t.s) / speed + t.x;
          t.y = (Math.cos(deg) * t.s) / speed + t.y;
        }

        ctx.value.strokeStyle = t.color;
        ctx.value.lineWidth = t.w;
        ctx.value.beginPath();
        ctx.value.moveTo(t.x, t.y);

        ctx.value.lineTo(Math.sin(deg) * t.h + t.x, Math.cos(deg) * t.h + t.y);
        ctx.value.closePath();
        ctx.value.stroke();
      }
    };

    // 循环
    const animate = () => {
      drow();
      animateId = requestAnimationFrame(animate);
    };

    return {
      canvas,
    };
  },
};
</script>

<style scoped lang="less">
.canvas-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
