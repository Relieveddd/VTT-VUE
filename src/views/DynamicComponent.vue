<template>
    <!-- component:vue内置动态组件标签 ：is 定义输出值 -->
    <component :is="partialI"></component>
    <button @click="componentClick">点击变化组件</button>
</template>
<script setup>
import { shallowRef } from "vue";
// 引入组件1 
import componentImg from "@/PartialView/Image.vue";
//引入组件2
import ComponentTextBar from "@/PartialView/TextBar.vue";
//定义输出值
let partialI = shallowRef(componentImg);
// 定义一个函数 点击切换不同的组件
function componentClick(){
    //判断partialI所定义的输出值是否等于componentImg组件的内容，
    //如果是就输出相反ComponentTextBar组件的内容，否就输出componentImg的值
    if (partialI.value.__file === componentImg.__file){
        partialI.value = ComponentTextBar;
    }else{
        partialI.value = componentImg;
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
