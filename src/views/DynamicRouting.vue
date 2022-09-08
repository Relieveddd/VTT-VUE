<template>
    <!-- 动态路由 -->
    <div>{{dynamic}}</div>
</template>
<script setup>
import {ref} from "vue";
let dynamic =ref('动态路由');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
