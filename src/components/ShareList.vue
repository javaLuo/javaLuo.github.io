<template>
  <iframe
    class="share-iframe"
    :src="url"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
  ></iframe>
</template>
<script>
export default {
  props: {
    url: { type: String, default: "" }
  }
};
</script>
<style lang="less">
.share-iframe {
  width: 100%;
}
</style>
