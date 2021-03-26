<template>
  <li class="artive-list">
    <div class="title" @click="onDetailChose">{{ thisData.name }}</div>
    <div class="time">{{ thisData.date }}</div>
    <div v-if="thisData.pic" class="pic">
      <img :src="thisData.pic" />
    </div>
    <div class="info">
      <span v-html="thisData.info"></span>
    </div>
    <div class="tags">
      <div v-for="(item, index) in thisData.tags" :key="index">
        <i class="el-icon-price-tag"></i>
        {{ item }}
      </div>
    </div>
    <div class="read-more" @click="onDetailChose">阅读全文</div>
  </li>
</template>

<script>
/** 单个数据列表项 **/
import { useRouter } from "vue-router";

export default {
  name: "ArtiveList",
  props: {
    thisData: Object,
  },
  setup(props) {
    const router = useRouter();

    /** 点击某篇文章保存相关数据进入详情 **/
    const onDetailChose = () => {
      router.push(`/detail/${props.thisData.id}`);
    };

    return {
      onDetailChose,
    };
  },
};
</script>

<style scoped lang="less">
.artive-list {
  width: 100%;
  box-sizing: border-box;
  border-left: solid 5px #d3d3d3;
  padding: 4px 15px;
  list-style: none;
  & + li {
    margin-top: 32px;
  }
  .title {
    font-size: 24px;
    margin-bottom: 8px;
    color: #222;
    transition: all 0.2s;
    cursor: pointer;
    letter-spacing: 1px;
    word-break: break-all;
    word-wrap: break-word;
    &:hover {
      color: #2b8ace;
    }
  }
  .time {
    color: #888;
    margin-bottom: 8px;
  }
  .pic {
    box-sizing: border-box;
    margin-bottom: 8px;
    img {
      max-width: 100%;
      max-height: 350px;
      border-radius: 4px;
    }
  }
  .info {
    color: #888;
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
  .tags {
    margin-bottom: 8px;
    display: flex;
    & > div {
      font-size: 12px;
      margin-right: 4px;
      background-color: #2b8ace;
      color: #fff;
      padding: 3px 5px;
      border-radius: 3px;
    }
  }
  .read-more {
    font-size: 16px;
    color: #30634c;
    letter-spacing: 1px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      color: #0366d6;
    }
  }
}
</style>
