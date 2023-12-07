<template>
  <div class="live-box">
    <div class="bread" ref="bread">
      <i class="el-icon-location"></i>
      <el-breadcrumb>
        <el-breadcrumbItem to="/all">博客列表</el-breadcrumbItem>
        <el-breadcrumbItem>日志列表</el-breadcrumbItem>
      </el-breadcrumb>
      <Search v-model="searchValue"/>
    </div>
    <transition-group name="list" tag="ul" class="live">
      <ArtiveList
        v-for="v in pageNowData"
        :thisData="v"
        :key="v.name"
        @goDetail="goDetail"
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

<script setup name="name-article">
import { ref } from "vue";

import ArtiveList from "@/components/ArtiveList.vue";
import Search from "@/components/Search.vue";
import MyLoading from "@/components/MyLoading.vue";
import usePages from "@/hooks/pages";

import { useRouter } from "vue-router";

const bread = ref(null);
const { pageNow, pageSize, total, searchValue, pageNowData, onPageChange } = usePages(3);
const router = useRouter();

const goDetail = (id) => {
  if(!document.startViewTransition){
    router.push(`/detail/${id}`);
    return;
  }

  bread.value.style.viewTransitionName = 'bread';
  document.startViewTransition(()=>{
    bread.value.style.viewTransitionName = '';
    router.push(`/detail/${id}`);
  });
}

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
  }
}
</style>
