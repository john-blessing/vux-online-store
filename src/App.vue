<template>
  <div id="app">
      <router-view keep-alive></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fff;
  }

</style>
