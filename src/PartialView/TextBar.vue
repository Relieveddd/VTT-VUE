<template>
  <div class="proc-unit-emph-3r">
    <div class="inner-component-title-3r">
      This component is PartialView/TextBar2.vue
    </div>
    <div class="ProcUnitHorizBar50">
      <span class="Inner50 ProcUnitChar04">
        该组件中声明函数handleShow供父组件调用（invoke）.
      </span>
      <span>父组件传过来的的值：{{ InputTextval }}</span>
    </div>
  </div>
</template>
<script setup>
function handleShow() {
  alert("函数handleShow成功被父组件调用");
}
function handleText() {
  InputTextval.value = OutForChild;
}
const jsonText = { str: "你个老六" };
let InputTextval;
defineExpose({
  handleShow,
  jsonText,
  handleText,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.ProcUnitTextBox3R {
  width: 400px;
}
</style>
