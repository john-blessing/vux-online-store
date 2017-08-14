<template>
  <div class="helloPage">
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Footer from '../components/Footer'
  export default {
    components: {
      'my-footer': Footer
    }
  }
</script>

<style lang="less">
  .helloPage {
    .slide-enter-active {
      transform: translateX(0%);
      transition: transform .5s
    }
    .slide-enter,
    {
      transform: translateX(100%)
    }
    width: 100%;
    height: 100vh;
    .vux-flexbox {
      height: 100%;
      .vux-flexbox-item {
        width: 100%;
        text-align: center;
      }
    }
    img {
      width: 150px;
    }
    h1 {
      text-align: center;
    }
  }
</style>