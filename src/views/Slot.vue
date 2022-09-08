<template>
  <div class="AuxiMarkClear"></div>
  <componentPhotoAlbum title="喵1">
    <img src="/pict/ValAddedBiz/Logo.jpeg" alt="">
  </componentPhotoAlbum>
  <componentPhotoAlbum title="喵2">
    <img src="/pict/ValAddedBiz/Logo.jpeg" alt="">
  </componentPhotoAlbum>
  <componentPhotoAlbum title="喵3">
    <img src="/pict/ValAddedBiz/Logo.jpeg" alt="">
  </componentPhotoAlbum>
 
</template>
<script setup>
import { ref} from "vue";

import ComponentPhotoAlbum from "@/PartialView/PhotoAlbum.vue";
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img.ProcUnitImgJR {
  height: 250px;
}
img{
  margin:20px;

}
</style>
