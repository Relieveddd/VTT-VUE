<template>
    <!-- 路由传值 -->
    <!--  {{ proxy.$route.query.strTest2}}未传值成功-->
    <div>{{ proxy.$route.query.strTest}}</div>
    <div>由插值语法直接渲染的路由传值：{{ proxy.$route.query.strTest2}}</div>
    <div>由声明变量的value值渲染的路由传值:{{ routerParam }}</div>
    <div>{{ proxy.$route.query.transmit }}</div>

</template>
<script setup>
import { getCurrentInstance,ref } from "vue";
const { proxy } = getCurrentInstance();
// 读取显示undefined 未定义
// console.log(JSON.stringify(proxy.$route.query.strTest2))
let routerParam =ref();
// 未实现路由传值 
routerParam.value = proxy.$route.query.strTest2;

</script>
<style scoped></style>
