<template>
  <div class="page3">
    <ul class="friends-link">
      <li class="title">联系方式</li>
      <li class="line"></li>
      <li class="find">
        <el-tooltip
          class="item"
          effect="dark"
          content="QQ 376693576"
          placement="top"
        >
          <img :src="ImgQQ" />
        </el-tooltip>
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content">
            <img class="img-wechart" :src="ImgWeChart" />
          </div>
          <img :src="ImgWechart" />
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Twitter"
          placement="top"
        >
          <a
            href="https://twitter.com/Logic_yes"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img :src="ImgTwitter" />
          </a>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="376693576@qq.com"
          placement="top"
        >
          <a
            href="mailto:376693576@qq.com"
            target="_blank"
            rel="nofollow me noopener noreferrer"
          >
            <img :src="ImgEmail" />
          </a>
        </el-tooltip>
      </li>
      <li class="title" style="margin-top: 16px">去往其他服务器</li>
      <li class="line"></li>

      <li class="friend">
        <a
          href="//www.ruanyifeng.com"
          target="_blank"
          rel="nofollow me noopener noreferrer"
          >阮一峰的个人网站</a
        >
      </li>
      <li class="friend">
        <a
          href="https://www.zhangxinxu.com"
          target="_blank"
          rel="nofollow me noopener noreferrer"
          >张鑫旭-鑫空间-鑫生活</a
        >
      </li>
      <li class="friend">
        <a
          href="https://www.microanswer.cn"
          target="_blank"
          rel="nofollow me noopener noreferrer"
          >Microanswer 首页</a
        >
      </li>
    </ul>

    <div class="hi-one">
      <div>
        <div>{{ hi.hitokoto }}</div>
        <div class="from">{{ hi.from }}</div>
      </div>
    </div>
    <div class="info-box">
      <div class="open-icons">
        <a
          href="https://cn.vuejs.org"
          target="_blank"
          rel="nofollow me noopener noreferrer"
          title="vue.js"
        >
          <img :src="LogoVue" />
        </a>

        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="nofollow me noopener noreferrer"
          title="mozilla.org"
        >
          <img :src="LogoMdn" />
        </a>
        <a
          href="http://www.w3school.com.cn/"
          target="_blank"
          rel="nofollow me noopener noreferrer"
          title="w3school"
        >
          <img :src="LogoHTML5" />
        </a>
        <a
          href="https://github.com/javaLuo"
          target="_blank"
          rel="nofollow me noopener noreferrer"
          title="github"
        >
          <img :src="LogoGitHub" />
        </a>
      </div>
      <div>vue-cli 4.x 全家桶框架支持</div>
      <div>整站都放在了GitHub, V3API获取文章和评论</div>
      <div>感谢开源世界的恩惠</div>
    </div>
    <div class="last">
      © 2014–2020
      <a
        href="https://isluo.com"
        target="_blank"
        rel="nofollow me noopener noreferrer"
        >isluo.com</a
      >
      Ltd.
    </div>
  </div>
</template>

<script>
import LogoVue from "../../assets/logo-vue.png";
import LogoGitHub from "../../assets/logo-github.png";
import LogoMdn from "../../assets/logo-mdn.png";
import LogoHTML5 from "../../assets/logo-html5.png";
import ImgPic from "../../assets/myhead.png";

import ImgQQ from "../../assets/footer/share_qq.png";
import ImgWechart from "../../assets/footer/share_wechart.png";
import ImgTwitter from "../../assets/footer/share_twitter.png";
import ImgEmail from "../../assets/footer/email.png";
import ImgWeChart from "../../assets/weima2.png";
export default {
  name: "page3",
  data: function() {
    return {
      LogoVue,
      LogoGitHub,
      LogoMdn,
      LogoHTML5,
      ImgPic,
      ImgQQ,
      ImgEmail,
      ImgWechart,
      ImgTwitter,
      ImgWeChart
    };
  },
  props: {
    hi: { type: Object }
  }
};
</script>

<style scoped lang="less">
.page3 {
  position: relative;
  background-color: #252526;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #ccc;
  box-sizing: border-box;
  .logo-box {
    flex: 1;
    box-sizing: border-box;
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      a {
        display: inline-block;
        margin: 0 16px 16px 0;
        img {
          height: 32px;
          width: auto;
        }
      }
    }
  }
  .hi-one {
    flex: 2;
    display: flex;
    font-size: 14px;
    color: #888;
    justify-content: center;
    padding: 20px;
    & > div {
      text-align: right;
      .from {
        margin-top: 10px;
        &::before {
          content: "";
          display: inline-block;
          height: 1px;
          width: 100px;
          background-color: #666;
          transform: translate(-6px, -5px);
        }
      }
    }
  }
  .friends-link {
    list-style: none;
    font-size: 14px;
    flex: 1;
    letter-spacing: 1px;
    text-align: right;
    min-width: 200px;
    .title {
      font-size: 18px;
    }
    .line {
      height: 1px;
      background-color: #666;
      border-bottom: solid 1px #1e1e1e;
      width: 100%;
      margin: 10px 0 10px 0;
    }
    .friend {
      & + .friend {
        margin-top: 4px;
      }
    }
    .find {
      a {
        margin-left: 8px;
      }
      img {
        cursor: pointer;
        height: 24px;
        width: auto;
        opacity: 0.4;
        transition: opacity 200ms;
        &:hover {
          opacity: 0.8;
        }
        & + img {
          margin-left: 8px;
        }
      }
    }

    a {
      color: #aaa;
      transition: color 200ms;
      &:hover {
        color: #f0f0f0;
      }
    }
  }
  .info-box {
    flex: 1;
    align-self: center;
    text-align: center;
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 22px;
    min-width: 200px;
    color: #aaa;
    .open-icons {
      a {
        display: inline-block;
        margin: 0 16px 16px 0;
        img {
          height: 32px;
          width: auto;
        }
      }
    }
  }
  .last {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #101010;
    text-align: center;
    margin-top: 32px;
    color: #4e4e4e;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    letter-spacing: 1px;
    img {
      height: 40px;
      margin-right: 8px;
    }
    a {
      color: #4e4e4e;
      transition: color 200ms;
      &:hover {
        color: #e0e0e0;
      }
    }
  }
}
.img-wechart {
  width: 128px;
  height: auto;
}

@media all and (max-width: 800px) {
  .page3 {
    .info-box {
      display: none;
    }
  }
}
@media all and (max-width: 420px) {
  .page3 {
    .friends-link,
    .info-box {
      display: none;
    }
  }
}
</style>
