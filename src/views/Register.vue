<template>
    <div class="register">
        <x-header title="注册" :left-options="{backText: ''}"></x-header>
        <group style="margin-left: 10px;margin-right: 10px;">
            <x-input v-model="form.username" placeholder="手机号码"></x-input>
        </group>
        <group style="margin-left: 10px;margin-right: 10px;" class="send-message">
            <x-input title="" v-model="form.sms_code" class="weui-vcode" placeholder="手机验证码">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>
        </group>
        <group style="margin-left: 10px;margin-right: 10px;">
            <x-input type="password" v-model="form.password" placeholder="密码"></x-input>
        </group>
        <div class="remember-account">
            <check-icon :value.sync="remember">记住密码</check-icon>
        </div>
        <group style="margin-left: 10px;margin-right: 10px;">
            <x-button @click.native="onRegister" type="primary">注册</x-button>
        </group>
        <div class="forgive-password">
            <a href="">忘记密码</a>
        </div>
    </div>
</template>
<script>
    import {
        XInput,
        Group,
        Flexbox,
        FlexboxItem,
        XButton,
        Divider,
        CheckIcon,
        XHeader
    } from 'vux'
    export default {
        data() {
            return {
                form: {
                    username: '',
                    sms_code: '',
                    password: ''
                },
                remember: true
            }
        },
        components: {
            XInput,
            XButton,
            CheckIcon,
            Group,
            Flexbox,
            Divider,
            FlexboxItem,
            XHeader
        },
        methods: {
            onRegister() {

            }
        }
    }
</script>
<style lang="less" scoped>
    .register {
        .forgive-password {
            text-align: right;
            margin-top: 20px;
            margin-right: 10px;
            font-size: 14px;
        }
        .remember-account {
            text-align: right;
            margin-right: 10px;
            margin-top: 10px;
        }
    }
</style>