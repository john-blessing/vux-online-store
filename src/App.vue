<template>
  <div id="app">
      <router-view keep-alive></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created(){
      console.log(123)
    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }

</style>
