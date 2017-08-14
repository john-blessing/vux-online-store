<template>
    <div class="tabbar-footer">
        <div class="self-tab-bar" v-if="isVisible">
            <a href="javascript:;" :class="{activeBar: isSelected == 'home'}" @click="onSelected('home')">
                <img src="../assets/img/footer_nav_1.png">
                <span>首页</span>
            </a>
            <a href="javascript:;" :class="{activeBar: isSelected == 'classify'}" @click="onSelected('classify')">
                <img src="../assets/img/footer_nav_2.png">
                <span>分类</span>
            </a>
            <a href="javascript:;" :class="{activeBar: isSelected == 'cart'}" @click="onSelected('cart')">
                <img src="../assets/img/footer_nav_3.png">
                <span>购物车</span>
            </a>
            <a href="javascript:;" :class="{activeBar: isSelected == 'me'}" @click="onSelected('me')">
                <img src="../assets/img/footer_nav_4.png">
                <span>我的</span>
            </a >
        </div>
    </div>
</template>

<script>
    import {
        XHeader,
        Flexbox,
        FlexboxItem
    } from 'vux'
    export default {
        props: {
            isVisible: {
                default: true,
                required: false
            }
        },
        data(){
            return {
                isSelected: this.$route.name
            }
        },
        methods:{
            onSelected(v){
                this.$router.push({
                    path: `/${v}`
                })
                this.isSelected = v;
            }
        },
        components: {
            XHeader,
            Flexbox,
            FlexboxItem
        }
    }
</script>

<style lang="less">
    .tabbar-footer{
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        .self-tab-bar{
            display: flex;
            flex-direction: row;
            border-top: 1px solid #ccc;
            padding-top: 5px;
            background: #fff;
            .activeBar{
                span{
                    color: green;
                }
            }
            img{
                width: 24px;
            }
            a{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex: 0 0 25%;
                span{
                    font-size: 12px;
                    color: #444;
                    margin-top: 3px;
                }
            }
        }
    }
</style>