<template>
    <!-- 全局组件 固定语法 proxy.自定义组件名（全局里面的自定义命名）-->
    <span>{{proxy.$str}}</span><br>
    <span>{{proxy.$json.objStr}}</span>
</template>

<script setup>
//首先引入定义的全局组件getCurrentInstance
import {ref, getCurrentInstance } from 'vue';
//返回{ proxy } 函数
let { proxy } = getCurrentInstance();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
