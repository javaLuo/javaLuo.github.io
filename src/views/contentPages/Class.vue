<template>
  <div class="class-box">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb>
        <el-breadcrumbItem>标签分类</el-breadcrumbItem>
      </el-breadcrumb>
    </div>
    <ul>
      <li class="tag-box" v-for="(item, index) in tags" :key="`f${index}`">
        <div class="tag-title">{{ item }}</div>
        <ul class="tag-list">
          <li
            v-for="(item2, index2) in onCheckTags(item)"
            @click="onLinkClick(item2.id)"
            :key="index2"
          >
            {{ item2.name }}
          </li>
        </ul>
      </li>
    </ul>
    <MyLoading :show="!isBloged" />
  </div>
</template>

<script>
/** 标签页 **/
import { ref } from "vue";
import { useRouter } from "vue-router";
import { blogs } from "@/config";
import MyLoading from "@/components/MyLoading";

export default {
  name: "name-class",
  components: {
    MyLoading,
  },
  setup() {
    const router = useRouter();
    const isBloged = ref(!!blogs);

    let tags = new Set();
    for (let i = 0; i < blogs.length; i++) {
      for (let j = 0; j < blogs[i].tags.length; j++) {
        const tag = blogs[i].tags[j];
        tags.add(tag);
      }
    }
    tags = Array.from(tags).sort();
    // 筛选文章中指定tag的文章
    const onCheckTags = (tag) => {
      return blogs.filter((item) => {
        for (let i = 0; i < item.tags.length; i++) {
          if (item.tags[i].toUpperCase() === tag.toUpperCase()) {
            return true;
          }
        }
        return false;
      });
    };

    const onLinkClick = (id) => {
      router.push(`/detail/${id}`);
    };

    return {
      tags,
      isBloged,
      onCheckTags,
      onLinkClick,
    };
  },
};
</script>

<style scoped lang="less">
.class-box {
  .bread {
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    i {
      margin-right: 8px;
      margin-left: -5px;
      color: #0acb79;
    }
  }
  .nothing {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
    color: #888;
    div {
      margin-top: 8px;
    }
  }

  .tag-box {
    list-style: none;
    margin-bottom: 20px;
    .tag-title {
      font-size: 22px;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    .tag-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      color: #444;
      & > li {
        cursor: pointer;
        list-style: none;
        flex: none;
        box-sizing: border-box;
        width: 33.33%;
        min-width: 150px;
        padding: 20px;
        margin: 0;
        background-color: #f8f8f8;
        transition: all 300ms;
        word-break: break-all;
        word-wrap: break-word;
        &:nth-child(even) {
          background-color: #dfdfdf;
        }
        &:hover {
          color: #108ee9;
        }
      }
    }
  }
}
</style>
