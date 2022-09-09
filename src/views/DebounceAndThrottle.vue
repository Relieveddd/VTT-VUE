<template>
  <div>
    <input type="text" />
  </div>
</template>
<script setup>
// Debounce (防抖): 每次触发事件时设置延迟调用函数，在此期间取消以前触发的事件.
function handleDebounce(funcFollowIn, numDelayIn) {
  let timerInner = null;
  return (...args) => {
    if (timerInner) clearTimeout(timerInner);
    timerInner = setTimeout(() => {
      funcFollowIn.apply(this, args);
    }, numDelayIn);
  };
}
// Throttle (节流): 事件占用一个时间段, 在此时间段内不会再接受事件触发.
function handleThrottle(funcFollowIn, numDelayIn) {
  let timerInner = null;
  return (...args) => {
    if (!timerInner) {
      timerInner = setTimeout(() => {
        funcFollowIn.apply(this, args);
        timerInner = null;
      }, numDelayIn);
    }
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
