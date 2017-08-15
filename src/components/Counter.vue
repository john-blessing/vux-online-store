<template>
    <div class="good-counter">
        <div @click="reduce">-</div>
        <div v-text="count"></div>
        <div @click="increase">+</div>
    </div>
</template>
<script>
    export default {
        props: ['BuyCount'],
        data() {
            return {
                count: this.BuyCount.count
            }
        },
        methods: {
            reduce() {
                this.count--;
                
                if (this.count < 1) {
                    this.count = 1;
                } else {
                    this.$emit('update:count', { type: 0, id: this.BuyCount.id, count: this.count, state: this.BuyCount.state })
                }
                
            },
            increase() {
                this.count++;
                if (this.count > 5) {
                    this.count = 5;
                } else {
                    this.$emit('update:count', { type: 1, id: this.BuyCount.id, count: this.count, state: this.BuyCount.state })
                }
            }
        }

    }
</script>
<style lang="less">
    .good-counter {
        >div {
            float: left;
            width: 20px;
            height: 20px;
            border: 1px solid #ccc;
            margin-left: -1px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>