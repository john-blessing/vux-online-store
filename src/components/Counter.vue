<template>
    <div class="good-counter">
        <div @click="reduce">-</div>
        <div v-text="count"></div>
        <div @click="increase">+</div>
    </div>
</template>
<script>
    export default {
        props: {
            num: {
                default: 0,
                required: false
            }
        },
        data() {
            return {
                count: 0
            }
        },
        mounted() {
            this.count = 1;
        },
        methods: {
            reduce() {
                this.count--;
                if (this.count < 1) {
                    this.count = 1;
                }
            },
            increase() {
                this.count++;
                if (this.count > 5) {
                    this.count = 5;
                }
            }
        }

    }
</script>
<style lang="less">
    .good-counter {
        width: 200px;
        >div {
            float: left;
            width: 30px;
            height: 30px;
            border: 1px solid #ccc;
            background: #fff;
            margin-right: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>