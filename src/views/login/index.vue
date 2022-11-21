<template>
    <div class="container">
        <div class="logo">
            <div class="logo-text">安通订舱网后台管理系统</div>
        </div>
        <div class="content">
            <div class="content-inner">
                <LoginForm />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import LoginForm from './components/login-form.vue';
</script>

<style lang="less" scoped>
    .container {
        display: flex;
        height: 100vh;
        background: url(../../assets/images/login-bg.jpg) 0 0 no-repeat;
        background-size: cover;

        .content {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            padding-bottom: 40px;
        }
    }
</style>

<style lang="less" scoped>
    // responsive
    @media (max-width: @screen-lg) {
        .container {
            .banner {
                width: 25%;
            }
        }
    }
</style>
