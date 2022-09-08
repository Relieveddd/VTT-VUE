<template>
    <div>组合API插入值(语法:ref()):{{num}}</div>
    <input type="text" v-model="num">
    <button @click="values">点击一次执行一次</button>
    <table>
        <tr>
            <th>序号</th>
            <th>名字</th>
            <th>年龄</th>
        </tr>
        <tr v-for="jsonItem in tables.arr" :key="jsonItem.id">
            <td>{{jsonItem.id}}</td>
            <td>{{jsonItem.name}}</td>
            <td>{{jsonItem.age}}</td>
        </tr>
    </table>
    <button @click="abcd">点击创建新的内容
    </button>
    <div class="textContent"></div>
</template>

<script setup>
//组合API 调用 vue框架里面的函数 ref
import {ref,onUpdated,onMounted, nextTick} from "vue";
//使v-dom 具有响应式 赋值时添加语法 ref()
let num = ref(0);
function values (){
    num.value++;
}
 let tables =ref(
    {
        arr : [
           { id : 1,
            name:"yy",
            age:11,
           },
            {
                id: 2,
                name: "yy",
                age: 11,
            },
            {
                id: 3,
                name: "yy",
                age: 11,
            },
        ],

        },
    )
function abcd() {   
    tables.value.arr.push( 
        {
            id: tables.value.arr.length+1,
           name:"YY",
            age: parseInt(Math.random() * 100),
        } 
   );
    let textContent = document.querySelector('.textContent');
    textContent.innerHTML += '点击出现的内容<br>';//<br> 换行 
}

 //组合API钩子函数
 onMounted(() =>{
    values();
    abcd();
 }) 
 onUpdated(()=>{
    
 })
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
    /* 
    style scoped:代表局部css样式表，只组件使用，如果去掉scoped将变成全局css样式表
    */
.textContent {
    position: absolute;
    right:0;
    top:0;
   
    background-color: pink;
}

</style>
