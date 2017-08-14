<template>
    <div class="login">
        <group style="margin-left: 10px;margin-right: 10px;">
            <x-input title="账号" v-model="form.username" placeholder="手机号码"></x-input>
        </group>
        <group style="margin-left: 10px;margin-right: 10px;">
            <x-input title="密码" type="password" v-model="form.password"></x-input>
        </group>
        <div class="remember-account">
            <check-icon :value.sync="remember">记住密码</check-icon>
        </div>
        <group style="margin-left: 10px;margin-right: 10px;">
            <x-button @click.native="onLogin" type="primary">登录</x-button>
        </group>
        <div class="forgive-password">
            <a href="">忘记密码</a>
        </div>
    </div>
</template>
<script>    
    import { XInput, Group, XButton, CheckIcon } from 'vux'
    export default {
        data(){
            return {
                form: {
                    username: '',
                    password: ''
                },
                remember: true
            }
        },
        components: {
            XInput,
            XButton,
            CheckIcon,
            Group
        },
        methods: {
            onLogin(){

            }
        }
    }
</script>
<style lang="less">
    .login{
        margin-top: 50px;
        .forgive-password{
            text-align: right;
            margin-top: 20px;
            margin-right: 10px;
            font-size: 14px;
        }
        .remember-account{
            text-align: right;
            margin-right: 10px;
            margin-top: 10px;
        }
    }
</style>