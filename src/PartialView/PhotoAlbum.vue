<template>
    {{aaa.title}}
    <div class="div">
        <slot>

        </slot>
    </div>

</template>
<script setup>
import {ref} from "vue";
let aaa = defineProps({
    title:String,
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.div {
    border: 1px solid #000;
}
</style>
