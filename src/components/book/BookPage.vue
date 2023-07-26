<template>
  <div id="container">
    <NavBarBook />
    <DashboardBook /> 
    <FooterBook />
  </div>
</template>

<script setup>
import NavBarBook from "../header/NavBarBook.vue";
import FooterBook from "../footer/FooterBook.vue";
import DashboardBook from "../../views/DashboardView.vue";

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
