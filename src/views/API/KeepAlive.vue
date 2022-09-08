<template>

    <span>keep-alive</span>
    <span>
        <router-link to="/KeepAlive/InputText">input text (router-view)</router-link>
    </span>
    <span>
        <router-link to="/KeepAlive/Image">images</router-link>
    </span>
    <!-- 第一次 -->
    <router-view v-slot="{Component}">
        <keep-alive>
            <component :is="Component" title="textBox with keep-alive"></component>
        </keep-alive>
    </router-view>
    <!-- 第二次 -->
    <router-view v-slot="{Component}">
        <component :is="Component" title="not-keep-alive"></component>
    </router-view>
    <!-- 引入几个router-view的里面的动态组件 就会有几个组件 -->
</template>
<script setup>
import InputText from '../../PartialView/KeepAlive/InputText.vue';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
    margin-right:50px;
}
</style>
