<template>
  <div class="bread">
    <i class="el-icon-location"></i>
    <span>{{ breadData }}</span>
  </div>
</template>

<script setup name="bread">
  defineProps({
    breadData: {type: String}
  });
</script>
