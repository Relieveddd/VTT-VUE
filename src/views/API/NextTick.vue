<template>
    <div class="age"></div>
    <div class="number">{{numArr}}</div>
    <button @click="ck">按钮</button>
</template>
<script setup>
import {nextTick, onMounted, ref} from "vue";
function carry () {
    // console.log('执行');
    // 未挂载的获取值是无法获取的 结果为null 
    const thisAge = document.querySelector('.age');
    const num = document.querySelector('.number');
    if (thisAge==null){
        alert('未使用钩子函数(即未挂载),故获取不到thisAge的值。')  
        }else{
        // thisAge.innerHTML='使用了钩子函数(即已挂载)表示v-dom已挂载,即能获取';   
        console.log(num.innerHTML);
    }
}
// carry();
let numArr = ref("1,2,3");
function ck() {
    numArr.value = "4,5,6,";
    // carry();
   nextTick(()=>{
    carry();
}); 
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
