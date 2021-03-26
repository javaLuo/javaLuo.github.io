<template>
  <div class="bread">
    <i class="el-icon-location"></i>
    <span>{{ breadData }}</span>
  </div>
</template>

<script>
/** 文章列表页 **/
export default {
  name: "bread",
  props: {
    breadData: String,
  },
};
</script>
