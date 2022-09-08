<template>
  <div ref="divGet">这是一个div</div>
  <ComponentInputBar ref="InputBarInner" />
  <div class="ProcUnitHorizBar50">
    <input type="text" placeholder="请输入" v-model="OutForChild" />
    <button @click="handleParentShow">执行子组件中的函数</button>
  </div>
</template>
<script setup>
import { nextTick, onMounted, ref, shallowRef } from "vue";
import ComponentInputBar from "@/PartialView/TextBar.vue";
const divGet = ref(null),
  InputBarInner = ref(null);
let OutForChild;
onMounted(() => {
  divGet.value.style.color = "red";
});
function handleParentShow() {
  // const newText = InputBarInner.value.jsonText.str;
  alert(InputBarInner.value.jsonText.str);
  InputBarInner.value.handleShow();
}
nextTick(() => {
  InputBarInner.value.handleText();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
