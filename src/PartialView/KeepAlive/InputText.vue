<template>
    <div class="thisComponent">
        <div class="title"> this component is PartialView/InputText.vue</div>
        <div class="num">
            <span>{{ Title.title }} </span>
            <span>进入次数：{{ getNum
            }}</span><span>退出次数：{{ outNum }}</span>
        </div>

        <input class="text" type="text" v-model="KeepAlive">
    </div>

</template>
<script setup>
import { ref, onActivated, onDeactivated, } from "vue";
let KeepAlive = ref('春风吹十里');
let getNum = ref(0);
let outNum = ref(0);
let Title = defineProps({
    title:String,
});
onActivated(()=>{
    getNum.value++;
})
onDeactivated(()=>{
    outNum.value++;
})
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.thisComponent{
    margin-bottom:20px;
    width: 500px;
    height: 100px;
    border: 1px solid rgb(52, 172, 52);
}
.title{
    margin-bottom:10px;
    width: 100%;
    background-color: blue;
    text-align: center;
    color:#fff;
}
.num {
    font-size: 12px;
    padding-left:10px;
    margin-bottom:20px;
}
.text {
    font-size: 12px;
}
</style>
