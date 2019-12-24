<template>
  <div class="home">
    <ListBox :sourceData="Config" />
    <div class="panel"></div>
  </div>
</template>

<script>
import ListBox from "@/components/ListBox";
import Config from "@/config";

export default {
  name: "home",
  data() {
    return {
      Config,
      pageOffsetX: 0, // 本次鼠标正在移动时的偏移值，累加上一次
    };
  },
  components: {
    ListBox,
  },
  methods: {},
};
</script>
<style lang="less">
.home {
  height: 100vh;
  min-height: 600px;
  display: flex;
  background-color: #ccc;
  .panel {
    flex: none;
    width: 30%;
  }
}
</style>
