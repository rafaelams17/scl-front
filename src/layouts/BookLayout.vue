<template>
  <div id="container">
    <NavBarBook />
    <router-view />
  </div>
</template>

<script setup>
import NavBarBook from "../components/header/NavBarBook.vue";

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
* {
  background-color: #fff;
  color: #000;
}
#container {
  height: 100vh;
}
</style>
