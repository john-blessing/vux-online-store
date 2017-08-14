<template>
    <div class="cart">
        <x-header title="购物车" :left-options="{backText: ''}"></x-header>
        <div class="cart-list">
            <div class="cart-item">
                <x-img src="https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360" class="good-img" error-class="ximg-error"></x-img>
                <div>
                    <p>小米5X 全网通 4GB+64GB 金色 移动联通电信4G手机 双卡双待</p>
                    <my-counter></my-counter>
                </div>
                <div class="cart-check-box">
                    <input type="checkbox">
                </div>
            </div>
        </div>
        <footer>
            <div><label for="check-all"><input id="check-all" type="checkbox">全选</label></div>
            <button>提交订单</button>
        </footer>
    </div>
</template>
<script>
    import {
        XHeader,
        XImg
    } from 'vux'
    import Counter from '../components/Counter'
    export default {
        data() {
            return {

            }
        },
        mounted() {

        },
        methods: {
            change(val) {}
        },
        components: {
            XHeader,
            XImg,
            'my-counter': Counter
        }
    }
</script>
<style lang="less">
    .cart {
        .cart-list {
            .cart-item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 5px;
                border-bottom: 1px solid #ccc;
                .good-img {
                    width: 80px;
                    height: 80px;
                    margin-right: 20px;
                }
                div>p {
                    width: 200px;
                    font-size: 14px;
                    margin-bottom: 10px;
                }
                .cart-check-box{
                    margin-left: 43px;
                }
            }
        }
        footer {
            width: 100%;
            height: 50px;
            border-top: 1px solid #ccc;
            position: fixed;
            bottom: 0;
            left: 0;
            background: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            >div {
                flex: 1;
                margin-left: 20px;
                input{
                    margin-right: 10px;
                    outline: none;
                }
            }
            button {
                width: 100px;
                background: red;
                color: #fff;
                border: 0;
                height: 100%;
                font-size: 18px;
            }
        }
    }
</style>