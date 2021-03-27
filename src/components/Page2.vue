<template>
  <div class="page2" :class="{ show: isShow, mobile: !isPc }">
    <Menus
      :isPlaying="isPlaying"
      @onClickScroll="onClickScroll"
      @onPlayOrStop="onPlayOrStop"
    />
    <div id="bodyBox" class="body-box" @wheel.stop>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Menus from "@/components/Menus.vue";

export default {
  name: "page2",
  props: {
    isPc: Boolean,
    isPlaying: Boolean,
    pageNow: Number,
  },
  components: {
    Menus,
  },
  setup(props, context) {
    const isShow = computed(() => props.pageNow === 1);

    const onClickScroll = () => {
      context.emit("onDownClick", props.pageNow === 2 ? 1 : 2);
    };

    const onPlayOrStop = (type) => {
      context.emit("onPlayOrStop", type);
    };

    return {
      isShow,
      onClickScroll,
      onPlayOrStop,
    };
  },
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
