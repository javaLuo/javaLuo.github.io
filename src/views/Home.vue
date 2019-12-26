<template>
  <div class="home">
    <ListBox :sourceData="Config" />

  </div>
</template>

<script>
import ListBox from "@/components/ListBox2";
import Config from "@/config";

export default {
  name: "home",
  data() {
    return {
      Config
    };
  },
  components: {
    ListBox
  },
  methods: {}
};
</script>
<style lang="less">
.home {
  height: 100vh;
  min-height: 600px;
  background-color: #ccc;
  .panel {
    flex: none;
    width: 30%;
  }
}
</style>
