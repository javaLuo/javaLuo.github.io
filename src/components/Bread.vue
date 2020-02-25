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
  data: function() {
    return {};
  },
  props: {
    breadData: String
  },
  components: {},
  mounted() {},
  computed: {}
};
</script>

<style scoped lang="less">
.bread {
}
</style>
