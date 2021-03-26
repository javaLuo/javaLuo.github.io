<template>
  <div id="app" class="boss">
    <router-view />
  </div>
</template>

<script>
import { provide } from "vue";
import { isPc } from "@/util/tools.js";

export default {
  setup() {
    provide("isPc", isPc());
  },
};
</script>

<style lang="less">
* {
  -webkit-overflow-scrolling: touch;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  overflow: hidden;
  font-size: 14px;
  &.page0 {
    .crisp-client {
      opacity: 0;
      pointer-events: none;
    }
  }
  .crisp-client {
    opacity: 1;
    transition: opacity 300ms;
  }
  pre {
    font-size: 16px;
  }
}
div {
  position: relative;
}

img,
span {
  vertical-align: middle;
  border: 0;
}
input {
  line-height: normal;
}
input,
textarea {
  -webkit-user-select: text;
  user-select: text;
} /* 表单元素的文本可以被选择 */
a:focus,
a:hover,
a:active {
  outline: none;
}
a {
  text-decoration: none;
}
button {
  cursor: pointer;
}
label {
  cursor: pointer;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
} /* 重新定义上标和下标的表现 */
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
} /* 边框合并为单一的边框 */
td,
th {
  padding: 0;
}
.all_nowarp {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.all_warp {
  word-break: break-all;
  word-wrap: break-word;
} /* 强制换行 */
.all_clear:after {
  content: ".";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}
.all_b {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
} /* 内框模式 */
.all_trans1s {
  transition: all 1s;
}
.boss {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;
}

/* 美化滚动条 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  background-color: transparent;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #222;
}

// 重置element样式
.el-pagination {
  button:disabled {
    background-color: transparent;
  }
  .btn-prev,
  .btn-next {
    background-color: transparent;
  }
}
.el-pager {
  li {
    background-color: transparent;
  }
}
</style>
