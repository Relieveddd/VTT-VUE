<template>
  <div class="proc-unit-emph-3r">
    <div class="inner-component-title-3r">
      This component is InputTextPinia.vue
    </div>
    <div class="ProcUnitHorizBar50">
      <input
        type="text"
        v-model="strVal"
        class="ProcUnitTextBox3R"
        placeholder="文本会被发送"
      />
      <button @click="setValFuncStore" class="ProcUnitBtn3R">
        发送到Pinia Store
      </button>
    </div>
  </div>
</template>
<script setup>
import { onUpdated, ref } from "vue";
//通过pinia发送
import { useCounterStore } from "@/store/counter";
const counter = useCounterStore();
let strVal = ref("");
//此函数通过store.dispatch机制执行Pinia Store中定义一个action，将strText的值直接传递到Pinia Store中的state
function setValFuncStore() {
  //对state赋值，可以dispatch一个action，也可以直接commit一个mutation
  counter.count = counter.count + parseInt(strVal.value);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.ProcUnitTextBox3R {
  width: 600px;
}
</style>
