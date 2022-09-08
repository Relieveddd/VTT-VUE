<template>
    <span>金额1:&nbsp;&nbsp;{{ money1 }}&nbsp;&nbsp;{{ update1 }}</span>&nbsp;&nbsp;
    <span>金额2:&nbsp;&nbsp;{{ money2 }}&nbsp;&nbsp;{{ update2 }}</span><br>
    <br>

    <div>总计金额：
        <span>{{sumMoney1 }}</span>&nbsp;&nbsp;<span>{{ sumMoney2 ()}}</span>
        <input type="text" v-model="number1">
        <input type="text" v-model="number2">
    </div>
    <button @click="num">确定</button><br>
    <button @click="clk">监听对象</button>
</template>
<script setup>
import { onMounted, onUpdated, ref, watch, computed} from "vue";
let money1 = ref(30);
let money2 = ref(30);
let update1 = ref('未变化');
let update2 = ref('未变化');
// let sumMoney1 =ref(0);
// let sumMoney2 = ref(0);
let number1  = ref();
let number2 = ref();

//函数运算只能计算一次，无法灵活运算
//  function num (){
//     // console.log(Number(number1.value));
//     // 将input输入值转换为数字类型 这样才能实现加法运算
//     sumMoney1.value = Number(number1.value) +money1.value;
//     sumMoney2.value = Number(number2.value) + money2.value;
//     update1.value = money1.value + '变化为' + sumMoney1.value;
//     update2.value = money2.value + '变化为' + sumMoney2.value;
// }

//computed计算属性 (总金额1)
const sumMoney1 = computed(()=>{
    return money1.value + money2.value;
});
//methods计算属性 (总金额2)
function sumMoney2 (){
    return money1.value + money2.value;
} ;
// 金额1的变化
watch(()=>
//监听对象
    money1.value,
//两个参数代表新值与旧值，也是回调函数
    (valNew,valOld)=>{
    update1.value = valOld+'变化为'+valNew;
    });
    //金额2的变化
    watch(()=>
        money2.value,
        (valNew, valOld)=>{
            update2.value = valOld + '变化为' + valNew;
        })
function num(){
    // parseFloat()parseFloat() 函数可解析一个字符串，并返回一个浮点数。
    // 该函数指定字符串中的首个字符是否是数字。如果是，则对字符串进行解析，
    //直到到达数字的末端为止，然后以数字返回该数字，而不是作为字符串。
    money1.value += parseFloat(number1.value);
    money2.value += parseFloat(number2.value);
}

//监听对象
const obj = ref({xiAoLi:'10',Zi:'10'})
// console.log(Number(obj.value.xiAoLi));//10
// console.log(JSON.stringify(obj.value.xiAoLi))//"10"
// console.log(JSON.stringify(obj.value));//对象变字符串
watch(()=>
    obj.value,
    (valNew,valOld)=>{
        console.log(JSON.stringify(valNew));
    },
    //深度监听 || immediate:true 立即监听，当页面一刷新机会就打印出结果
    {deep:true}
)
function clk (){
    obj.value.xiAoLi++;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
