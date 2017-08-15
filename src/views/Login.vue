<template>
    <div class="login">
        <x-header title="登录" :left-options="{backText: ''}"></x-header>
        <group style="margin-left: 10px;margin-right: 10px;">
            <x-input v-model="form.username" placeholder="手机号码"></x-input>
        </group>
        <group style="margin-left: 10px;margin-right: 10px;">
            <x-input type="password" v-model="form.password" placeholder="密码"></x-input>
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
    import { XInput, Group, XHeader, XButton, CheckIcon } from 'vux'
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
            XHeader,
            Group
        },
        methods: {
            onLogin(){

            }
        }
    }
</script>
<style lang="less" scoped>
    .login{
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