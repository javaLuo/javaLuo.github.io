<template>
  <div class="my-loading" v-show="show">
    <i class="el-icon-box nodata-icon" />
    <div>暂无数据</div>
  </div>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
  },
};
</script>
<style lang="less" scoped>
.my-loading {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  text-align: center;
  color: #ccc;
  .nodata-icon {
    font-size: 32px;
  }
  div {
    margin-top: 15px;
  }
}
</style>
