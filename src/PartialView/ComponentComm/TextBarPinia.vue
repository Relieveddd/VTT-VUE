<template>
  <div class="proc-unit-emph-3r">
    <div class="inner-component-title-3r">
      This component is InputBarPinia.vue
    </div>
    <div class="ProcUnitHorizBar50">
      <span>从Pinia Store接收到的值:<input v-model="counter.count" /></span>
    </div>
  </div>
</template>
<script setup>
//通过pinia发送
import { useCounterStore } from "@/store/counter";
const counter = useCounterStore();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.ProcUnitTextBox3R {
  width: 600px;
}
</style>
