<template>
    <!-- 指令 -->
    <div class="div1" v-html="directive"></div><br>
    <div class="div1" v-html="img"></div><br>
    <span>v-if/v-show</span>&nbsp;&nbsp;
    <!-- v-if指令：点击后隐藏部分完全消失包括原生代码（安全更高） -->
    <!-- <span v-if="btn">点击后显示的内容</span> -->
    <!-- v-show指令：点击后隐藏的标签并没有消失只是标签样式添加了隐藏样式 display：none(效率高) -->
    <span v-show="btn">点击后显示的内容</span>
    <button type="submit" class="btn" @click="v_if">显示/隐藏</button><br>
    <br>
    <span>v-once</span>&nbsp;&nbsp;
    <span v-once="v_once">{{xr }}</span>&nbsp;&nbsp;
    <span>{{xr}}</span>&nbsp;&nbsp;
    <button @click="xrNum">点击渲染次数</button>

</template>
<script setup>
import {ref} from "vue";
// v-dom里面的标签有v-html，那么就能将html源代码执行到v-dom当中 
let directive ='<div class="div2">directive:"v-html"指令可以将代码执行到v-dom当中</div>'
let img = '<img src="src/img/lists.png">'
// 给btn定义一个false值
let btn =ref(false);
// 点击事件时，就可以判断是否为显示
function v_if (){
    if(btn.value){
        btn.value = false;//显示
    }else{
        btn.value = true;//隐藏
    }
}
// v-once
// let v_once = ref('使用v-once只挂载一次');
let xr = ref(0);
function xrNum (){
    // v_once.value = '使用v-once只挂载两次';
    xr.value++;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
    height:30px;
    background-color: aqua;
    font-size: 20px;
}
</style>
