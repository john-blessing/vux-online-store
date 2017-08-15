<template>
    <div class="store-home">
        <swiper auto height="150px" dots-class="custom-bottom" dots-position="center">
            <swiper-item>
                <router-link to="/"><img src="../assets/img/swiper_1.jpg" style="width:100%"></router-link>
            </swiper-item>
            <swiper-item>
                <router-link to="/"><img src="../assets/img/swiper_2.jpg" style="width:100%"></router-link>
            </swiper-item>
            <swiper-item>
                <router-link to="/"><img src="../assets/img/swiper_2.jpg" style="width:100%"></router-link>
            </swiper-item>
        </swiper>

        <scroller lock-x :height="Height" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="100">
            <div class="box2">
                <div :key="i" v-for="i in bottomCount">
                    <div class="goods-item">
                        <div class="header">
                            <img class="goods-img" src="../assets/img/product_img_9.png">
                            <span>￥8000</span>
                        </div>
                        <div class="content">
                            <p>小米5X 全网通 4GB+64GB 金色 移动联通电信4G手机 双卡双待</p>
                            <div>
                                <x-button mini type="primary" @click.native="addCart">添加到购物车</x-button>
                            </div>
                        </div>
                    </div>
                </div>
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
                bottomCount: 5,
                goods: JSON.parse(this.$localStorage.get('goods')) ? JSON.parse(this.$localStorage.get('goods')) : [],
                Height: (document.body.offsetHeight - 200) + 'px'
            }
        },
        methods: {
            onScrollBottom() {
                if (this.onFetching) {
                    // do nothing
                } else {
                    this.onFetching = true
                    setTimeout(() => {
                        this.bottomCount += 5
                        this.$nextTick(() => {
                            this.$refs.scrollerBottom.reset()
                        })
                        this.onFetching = false
                    }, 2000)
                }
            },
            addCart() {
                this.goods.push({
                    id: Math.random().toString(36).substr(2),
                    title: '小米5X 全网通 4GB+64GB 金色 移动联通电信4G手机 双卡双待',
                    price: 8000,
                    count: 1,
                    state: false
                })
                this.$localStorage.set('goods', JSON.stringify(this.goods))
                this.$router.push({
                    path: '/cart'
                })
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
<style lang="less" scoped>
    .store-home {
        .goods-item {
            display: flex;
            flex-direction: row;
            border-bottom: 1px solid #ccc;
            align-items: flex-start;
            padding-top: .5em;
            .header {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-right: 2em;
                .goods-img {
                    width: 5em;
                    height: 5em;
                    margin-left: 1em;
                }
                span {
                    margin-right: 1em;
                    margin-left: 1em;
                    color: red;
                    margin-top: .5em;
                }
            }

            .content {
                p {
                    margin-bottom: 1em;
                    font-size: 13px;
                    width: 14em;
                }
            }
        }
    }
</style>