<template>
    <div>
        <swiper auto height="200px" dots-class="custom-bottom" dots-position="center">
            <swiper-item>
                <router-link to="/"><img src="https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360" style="width:100%"></router-link>
            </swiper-item>
            <swiper-item>
                <router-link to="/"><img src="https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360" style="width:100%"></router-link>
            </swiper-item>
            <swiper-item>
                <router-link to="/"><img src="https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360" style="width:100%"></router-link>
            </swiper-item>
        </swiper>
        <scroller lock-x :height="Height" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="100">
            <div class="box2">
                <p :key="i" v-for="i in bottomCount">placeholder {{i}}</p>
                <load-more tip="加载中。。。"></load-more>
            </div>
        </scroller>
    </div>
</template>
<script>
    import {
        Swiper,
        Group,
        Cell,
        SwiperItem,
        XButton,
        LoadMore,
        Scroller
    } from 'vux'
    export default {
        data() {
            return {
                showList1: true,
                onFetching: false,
                bottomCount: 20,
                Height: (window.screen.height - 250) + 'px'
            }
        },
        methods: {
            onScrollBottom() {
                if (this.onFetching) {
                    // do nothing
                } else {
                    this.onFetching = true
                    setTimeout(() => {
                        this.bottomCount += 10
                        this.$nextTick(() => {
                            this.$refs.scrollerBottom.reset()
                        })
                        this.onFetching = false
                    }, 2000)
                }
            }
        },
        components: {
            Swiper,
            Group,
            Cell,
            LoadMore,
            XButton,
            Scroller,
            SwiperItem,
        }
    }
</script>
<style lang="less">

</style>