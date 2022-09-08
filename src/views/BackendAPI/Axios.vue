<template>
  <div>
    <button class="ProcUnitBtn3R" @click="reqFuncReqGet">
      以Get方式请求接口
    </button>
    <button @click="reqFuncReqPost" class="ProcUnitBtn3R">
      以Post方式请求接口
    </button>
  </div>
  <div>
    <table class="ProcUnitDataAdapter50">
      <tr>
        <th>编号</th>
        <th>Name</th>
        <th>Url</th>
      </tr>
      <tr v-for="items in jsonArrayCompanies.links" :key="items.id">
        <td>{{ items.id }}</td>
        <td>{{ items.name }}</td>
        <td>{{ items.url }}</td>
      </tr>
    </table>
    <span>{{ strInputMsg }}</span>
    <span v-show="boolRing"></span>
  </div>
  <div class="divText">
    <span class="Inner50 ProcUnitChar02">{{ inputMsg }}</span>
    <span class="Inner50 ProcUnitChar02">{{ outputMsg }}</span>
  </div>
</template>
<script setup>
import { getCurrentInstance, ref } from "vue";
const { proxy } = getCurrentInstance();
let inputMsg = ref(""),
  outputMsg = ref("");
let jsonArrayCompanies = ref({
  name: "List of companies",
  links: [],
});
let strInputMsg = ref("");
let boolRing = ref("");
//通过get请求数据，并保存到links数组中
function reqFuncReqGet() {
  boolRing.value = "请求数据中";
  const promiseReq = proxy.$HelperAxios.get(
    "http://localhost:46208/Training/Demo",
    { params: { Msg: "你是真的帅" } } //发出的请求
  );
  promiseReq.then((responseResult) => {
    // console.log(responseResult);
    if (responseResult.status === 200) {
      if (responseResult.data.StatusCode === "Success") {
        inputMsg.value = responseResult.data.InputMsg;
        outputMsg.value = responseResult.data.OutputMsg;
        jsonArrayCompanies.value.links = responseResult.data.JsonArrayCompanies;
      } else {
        switch (responseResult.data.StatusCode) {
          case "Error1":
            alert("接口响应异常1.");
            break;
          case "Error2":
            alert("接口响应异常2.");
            break;
        }
      }
    } else {
      switch (responseResult.status) {
        case 100:
          alert(
            "客户端应当继续发送请求.这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝.客户端应当继续发送请求的剩余部分，或者请求已经完成，忽略这个响应.服务器必须在完成请求后向客户端发送一个最终响应"
          );
          break;
        case 101:
          alert(
            "客户端应当继续发送请求.这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝.客户端应当继续发送请求的剩余部分，或者请求已经完成，忽略这个响应.服务器必须在完成请求后向客户端发送一个最终响应"
          );
          break;
        case 404:
          alert(
            "服务器找不到请求的资源.由于经常发生这种情况，所以该状态码在上网时非常常见"
          );
          break;
        default:
          alert("未知错误");
          break;
      }
    }
    boolRing.value = "";
  });
}
//通过post请求获取后端数据，将其保存到数组links
function reqFuncReqPost() {
  const promiseReq = proxy.$HelperAxios.post(
    "http://localhost:46208/Training/Demo",
    { Msg: "你真特么的帅" } //发出的请求
  );
  promiseReq.then((responseResult) => {
    if (responseResult.status === 200) {
      if (responseResult.data.StatusCode === "Success") {
        console.log(responseResult.data);
        inputMsg.value = responseResult.data.InputMsg;
        outputMsg.value = responseResult.data.OutputMsg;
        jsonArrayCompanies.value.links = responseResult.data.JsonArrayCompanies;
      } else {
        alert("接口响应异常.");
      }
    } else {
      alert("网络请求出错.");
    }
  });
  boolRing.value = true;
}
</script>
<style scoped>
button.ProcUnitBtn3R {
  margin-right: 30px;
}
div.divText {
  clear: both;
}
div.divText > span {
  margin-right: 30px;
}
</style>
