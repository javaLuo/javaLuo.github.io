<template>
  <el-input
    class="search-input"
    placeholder="搜索"
    :prefix-icon="Search"
    v-model="v"
    @input="onInput"
  />
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
import { ref, watch } from "vue";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  searchValue: { type: String, default: "" },
});

const v = ref("");

watch(props.searchValue, (newV) => {
  v.value = newV;
});

function onInput(str) {
  console.log("waht:", str);
  emit("update:modelValue", str);
}
</script>

<style lang="less" scoped>
.search-input {
  margin-left: 20px;
  width: 200px;
  :deep(.el-input__wrapper) {
    background-color: transparent;
    box-shadow: none;
    border-bottom: solid 1px #afafaf;
    border-radius: 0;
  }
}
</style>