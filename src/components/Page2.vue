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

<script setup name="Page2">
import { computed } from "vue";
import Menus from "@/components/Menus.vue";
const emit = defineEmits(['onDownClick', 'onPlayOrStop']);
const props = defineProps({
  isPc: Boolean,
  isPlaying: Boolean,
  pageNow: Number,
});

const isShow = computed(() => props.pageNow === 1);

const onClickScroll = () => {
  emit("onDownClick", props.pageNow === 2 ? 1 : 2);
};

const onPlayOrStop = (type) => {
  emit("onPlayOrStop", type);
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
