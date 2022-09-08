<template>
  <div class="ProcUnitHorizBar50">
    <button @click="reqFuncGetOriginal" class="ProcUnitBtn3R">
      通过Get请求
    </button>
    <button @click="reqFuncPostOriginal" class="ProcUnitBtn3R">
      通过Post请求
    </button>
    <span class="Inner50 ProcUnitChar02">{{ inputMsg }}</span>
    <span class="Inner50 ProcUnitChar02">{{ outputMsg }}</span>
  </div>
</template>
<script setup>
import { getCurrentInstance, ref } from "vue";
const { proxy } = getCurrentInstance();
let inputMsg = ref(""),
  outputMsg = ref("");
function reqFuncGetOriginal() {
  outputMsg.value = "请稍后...";
}
function reqFuncPostOriginal() {
  proxy.$reqFuncAxios(
    "post",
    "/Training/Demo",
    {
      Msg: "Post 回锅肉",
      Msg2: "Post 青椒肉丝",
    },
    function (jsonResult) {
      console.log(jsonResult);
      alert(jsonResult.OutputMsg);
      msgReq.value = "";
    }
  );
}
</script>
<style scoped></style>
