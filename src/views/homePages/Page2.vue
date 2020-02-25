<template>
  <div class="page2" :class="{ show: isShow, mobile: !isPc }">
    <Menus @onClickScroll="onClickScroll" />
    <div id="bodyBox" class="body-box" @mousewheel.stop @DOMMouseScroll.stop>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menus from "../../components/Menus.vue";
import { isPc } from "../../util/tools";
export default {
  name: "page2",
  data: function() {
    return {
      isPc: isPc(),
      isShow: false,
      scrollDom: null
    };
  },
  props: {
    pageNow: Number
  },
  components: {
    Menus
  },
  methods: {
    onClickScroll() {
      this.$emit("onDownClick", 2);
    }
  },
  mounted() {
    if (this.pageNow === 1) {
      this.isShow = true;
    }
  },
  beforeUpdate() {
    this.isShow = this.pageNow === 1;
  }
};
</script>

<style scoped lang="less">
.page2 {
  height: 100%;
  position: relative;
  display: flex;
  .body-box {
    flex: auto;
    padding: 32px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
  }
  &.mobile {
    .body-box {
      padding-top: 64px;
    }
  }
}
</style>
