<template>
  <div class="live-box">
    <div class="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb>
        <el-breadcrumbItem to="/all">博客列表</el-breadcrumbItem>
        <el-breadcrumbItem>个人作品</el-breadcrumbItem>
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
/** 作品列表页 **/
import ArtiveList from "@/components/ArtiveList.vue";
import MyLoading from "@/components/MyLoading";
import usePages from "@/hooks/pages";

export default {
  name: "name-works",
  components: {
    ArtiveList,
    MyLoading,
  },
  setup() {
    const { pageNow, pageSize, total, searchValue, pageNowData, onPageChange } =
      usePages(2);

    return {
      pageNow,
      pageSize,
      total,
      searchValue,
      pageNowData,
      onPageChange,
    };
  },
};
</script>

<style scoped lang="less">
.list-enter-active {
  transition: all 400ms;
}
.list-enter-from,
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
      :deep(.el-input__inner) {
        background-color: transparent;
        border: none;
        border-bottom: solid 1px #ccc;
      }
    }
  }
}
</style>
