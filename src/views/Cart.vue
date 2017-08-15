<template>
    <div class="cart">
        <x-header title="购物车" :left-options="{backText: ''}"></x-header>
        <div class="cart-list" v-if="list.length > 0">
            <swipeout :key="index" v-for="(item, index) in list">
                <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
                    <div slot="right-menu">
                        <swipeout-button @click.native="onButtonClick(item)" type="warn">删除</swipeout-button>
                    </div>
                    <div slot="content" class="cart-item" >
                        <div class="cart-check-box">
                            <check-icon :value.sync="item.state" @update:value="updateValue"></check-icon>
                        </div>
                        <x-img src="https://i8.mifile.cn/v1/a1/ecb64c5e-9741-1535-dab6-28d47e2b0d10.webp?width=360&height=360" class="good-img" error-class="ximg-error"></x-img>
                        <div>
                            <p class="goods-title">{{item.title}}</p>
                            <div class="price-and-count">
                                <p class="price">￥{{item.price}}</p>
                                <my-counter :buy-count="item" name="123" @update:count="update"></my-counter>
                            </div>
                        </div>
                    </div>
                </swipeout-item>
            </swipeout>
        </div>
        <div v-if="list.length == 0">
            <p class="no-goods">购物车为空~~</p>
        </div>
        <footer>
            <div>
                <check-icon :value.sync="selectedAll"></check-icon>全选
                <span>￥{{totalPrice}}</span>
            </div>
            <x-button :show-loading="isDisabled" @click.native="submitAll">提交订单</x-button>
        </footer>
    </div>
</template>
<script>
    import {
        XHeader,
        XImg,
        XButton,
        Swipeout,
        SwipeoutItem,
        SwipeoutButton,
        CheckIcon
    } from 'vux'
    import Counter from '../components/Counter'
    export default {
        data() {
            return {
                selectedAll: false,
                isDisabled: false,
                totalPrice: 0,
                list: []
            }
        },
        mounted() {
            if (JSON.parse(this.$localStorage.get('goods')).length > 0) {
                this.list = JSON.parse(this.$localStorage.get('goods'))
            }
        },
        methods: {
            change(val) {},
            submitAll() {
                this.isDisabled = true;
                setTimeout(_ => {
                    this.isDisabled = false;
                }, 1000)
            },
            updateValue() {
                this.totalPrice = 0;
                let _list = this.list.filter(item => item.state == true);
                _list.map(item => {
                    this.totalPrice += item.price * item.count;
                })
            },
            update(v) {
                this.list.map(item => {
                    if (item.id == v.id) {
                        item.count = v.count;
                        if (v.state) {
                            if (v.type) {
                                this.totalPrice += item.price
                            } else {
                                this.totalPrice -= item.price
                            }
                        }
                    }
                })
            },
            handleEvents(v) {
                console.log('event: ', v)
            },
            onButtonClick(v) {
                this.list = this.list.filter(item => v.id !== item.id);
                this.$localStorage.set('goods', JSON.stringify(this.list));
            }
        },
        watch: {
            selectedAll(v) {
                if (v) {
                    this.totalPrice = 0;
                    this.list.map(item => item.state = true)
                    this.list.map(item => {
                        this.totalPrice += item.price * item.count;
                    })
                } else {
                    this.totalPrice = 0;
                    this.list.map(item => item.state = false)
                }
            }
        },
        components: {
            XHeader,
            XImg,
            XButton,
            CheckIcon,
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
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
                align-items: center;
                padding: 5px;
                border-bottom: 1px solid #ccc;
                .good-img {
                    width: 80px;
                    height: 80px;
                    margin-right: 20px;
                }
                .goods-title {
                    width: 200px;
                }
                div>p {
                    font-size: 14px;
                }
                .price-and-count {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;
                    .price {
                        font-size: 18px;
                        color: red;
                    }
                }
                .cart-check-box {}
            }
        }
        .no-goods{
            text-align: center;
            font-size: 14px;
            color: #ccc;
            margin-top: 5em;
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
                margin-left: 10px;
                position: relative;
                input {
                    margin-right: 10px;
                    outline: none;
                }
                span {
                    display: inline-block;
                    position: absolute;
                    right: 10px;
                    color: red;
                }
            }
            button {
                width: 140px;
                background: red;
                color: #fff;
                border: 0;
                height: 100%;
                font-size: 18px;
                border-radius: 0;
            }
        }
    }
</style>