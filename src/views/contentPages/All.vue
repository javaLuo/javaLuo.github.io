<template>
  <div class="live-box">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb>
        <el-breadcrumbItem>博客列表</el-breadcrumbItem>
      </el-breadcrumb>
      <el-input
        class="search-input"
        size="mini"
        placeholder="搜索"
        prefix-icon="el-icon-search"
        v-model="searchValue"
      ></el-input>
    </div>
    <transition-group name="list" tag="ul" class="live">
      <ArtiveList
        v-for="v in pageNowData"
        :thisData="v"
        :key="v.name"
      ></ArtiveList>
    </transition-group>
    <MyLoading :show="!pageNowData.length" />
    <div class="pagin">
      <el-pagination
        :total="total"
        :current-page="pageNow"
        :pageSize="pageSize"
        layout="total, prev, pager, next"
        @current-change="onPageChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
/** 文章列表页 **/
import { mapState } from "vuex";
import ArtiveList from "../../components/ArtiveList.vue";
import { sortDate } from "../../util/tools";
import MyLoading from "../../components/MyLoading";
export default {
  name: "name-all",
  data: function() {
    return {
      pageNow: 1,
      pageSize: 10,
      total: 0,
      pageNowData: [],
      searchValue: ""
    };
  },
  components: {
    ArtiveList,
    MyLoading
  },
  computed: {
    ...mapState({
      blogConfig: state => state.app.blogConfig
    }),
    searchData() {
      let res = this.blogConfig;
      if (this.searchValue) {
        res = res.filter(item => {
          return item.name.toLowerCase().includes(this.searchValue.toLowerCase());
        });
      }
      return res;
    },
    listData() {
      return sortDate(this.searchData).filter(
        (item, index) =>
          index >= (this.pageNow - 1) * this.pageSize &&
          index < this.pageNow * this.pageSize
      );
    }
  },
  watch: {
    searchValue(newV) {
      this.pageNow = 1;
    },
    searchData: {
      handler(newV) {
        this.total = newV.length;
      },
      immediate: true
    },
    listData: {
      handler(newV) {
        this.pageNowData = [];
        const dom = document.getElementById("bodyBox");
        if (dom) {
          dom.scrollTop = 0;
        }
        const temp = newV;
        for (let i = 0; temp[i]; i++) {
          setTimeout(() => this.pageNowData.push(temp[i]), i * 80);
        }
      },
      immediate: true
    }
  },
  methods: {
    /** 页码改变时触发 **/
    onPageChange(v) {
      this.pageNow = v;
    }
  }
};
</script>

<style scoped lang="less">
.list-enter-active {
  transition: all 500ms;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.live-box {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  min-height: 100%;
  .live {
    display: block;
    width: 100%;
    flex: auto;
    margin: 0;
    padding: 0;
    min-height: 300px;
    &li + li {
      margin-top: 16px;
    }
  }
  .pagin {
    margin-top: 8px;
    flex: none;
  }
  .bread {
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    i {
      margin-right: 8px;
      margin-left: -5px;
      color: #0acb79;
    }
    .search-input {
      margin-left: 20px;
      width: 200px;
      /deep/.el-input__inner {
        background-color: transparent;
        border: none;
        border-bottom: solid 1px #ccc;
      }
    }
  }
}
</style>
