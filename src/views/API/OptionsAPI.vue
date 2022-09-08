<template>
    <div class="initialMoney">
        <span class="initial">初始金额</span>
        <span class="money">{{ numMoney }}</span>
    </div>
    <div class="changeMoney">
        <span class="change">变化金额</span>
        <input type="text" v-model="numMoney">
        <button @click="moneyAdd"> 执行一个函数（金额+1)</button>
    </div>
    <!-- list -->
    <table>
        <tr>
            <th>编号</th>
            <th>Name</th>
            <th>Url</th>
        </tr>
        <tr v-for="items in jsonItems.links" :key="items.id">
            <td>{{ items .id}}</td>
            <td>{{ items .Name}}</td>
            <!-- v-bind: 可以简写为 :href -->
            <td><a v-bind:href="items.rul">{{items.rul}}</a></td>
            
        </tr>
    </table>
    <button class="setList" @click="setList">新增公司</button>
</template>

<script>
export default {
    name:" OptionsAPI",
    data() {
        return {
            numMoney: 100 ,
            jsonItems:{
                links:[
                    {
                        id:1,
                        Name:"Google",
                        rul:"http://wwww.Google.com",},
                        
                    {
                        id: 2,
                        Name: "baidu",
                        rul: "http://www.baidu.com",},
                    { 
                        id: 3,
                        Name: "Google",
                        rul: "http://wwww.Google.com",},
                    { 
                        id: 4,
                        Name: "Google",
                        rul: "http://wwww.Google.com",},
                    {
                        id: 5,
                        Name: "Google",
                        rul: "http//wwww.Google.com",},
                ],
            },
        };
    },
    methods:{
        moneyAdd(){
        this.numMoney++;
        },
        setList(){
            
            this.jsonItems.links.push(
                {
                    id: this.jsonItems.links.length+1,
                    Name: "Google",
                    rul: "http//wwww.Google.com",
                },
               
               
            );
        },
        link (){
            this.jsonItems.links[1].rul;
        }
        
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

/* 金额域样式 */
.initial {
    margin-right:20px;
}
.money {
    font-weight: 700;
    color:blueviolet;
}
.change {
    margin-right: 20px;
}
input {
    border:none;
}
/* 列表样式 */
 table {
    margin:20px;
     border: 1px solid #000;
 }

 th {
     padding: 0 50px;
     border: 1px solid #000;
 }

 td {
    padding:0 10px;
    text-align: center;
     border: 1px solid #000;
 }
</style>
