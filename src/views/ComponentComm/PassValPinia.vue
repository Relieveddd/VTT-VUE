<template>
  <component-input-text />
  <component-input-bar />
  <div class="ProcUnitHorizBar50">
    <span class="Inner50 ProcUnitChar04"
      >从 Pinia Store 接收的值&nbsp;<span class="Inner50 ProcUnitChar10"></span
      >{{ counter.count }}</span
    >
  </div>
  <div class="ProcUnitHorizBar50">
    <span class="Inner50 ProcUnitChar04">从 Pinia Store支持双向绑定</span>
    <input
      type="text"
      v-model="counter.count"
      class="ProcUnitTextBox3R"
      placeholder="从Pinia Store中接收的值"
    />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
//引用组件
import ComponentInputText from "@/PartialView/ComponentComm/InputTextPinia.vue";
import ComponentInputBar from "@/PartialView/ComponentComm/TextBarPinia.vue";
//Pinia Store
import { useCounterStore } from "@/store/counter";
const counter = useCounterStore();
onMounted(() => {});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.ProcUnitTextBox3R {
  width: 600px;
}
</style>
