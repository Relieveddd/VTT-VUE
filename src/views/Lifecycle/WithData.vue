<template>
    <div></div>
    <span class="covered">脚本执行结果:</span>
    <span class="number">脚本执行次数：<span class="num"></span>
        <!-- {{ count }} -->
    </span>
    <div class="innerHtml"></div>
    标识:&nbsp;&nbsp;<input type="text" v-model="carryNumber">
</template>
<script>
export default {
    data(){
        return{
            carryNumber:"",
            count:0,
        };
    },
    methods:{
        dataText(){
            this.count++;
            console.log(this.count);
            const dataText = document.querySelector(".innerHtml");
            dataText.innerHTML='触发结果';
            const num = document.querySelector('.num');
            num.innerHTML = this.count;
        }
    },
    //初始化之前
    beforeCreate(){
        //data 未创建 /methods 未创建
    },
    //初始化之后
    created(){
        //data 已创建 / methods 已创建 
    },
    //挂载之前
    beforeMount(){
    //data 已创建 / methods 已创建 / v-DOM 未挂载 DOM 
    },
    //挂载之后
    mounted(){
       // v-DOM 已挂载为 DOM 
        // this.dataText();
    },
    //数据更新之前
    beforeUpdate(){

    },
    //数据更新之后 
    updated(){
        this.dataText();
    },
    //卸载之前
    beforeDestroy(){

    },
    //卸载之后 
    destroyed(){
       
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.covered {
    margin-right:20px;
}
.innerHtml {
    margin: 50px;
}
</style>
