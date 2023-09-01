<template>
  <div id="container">
    <div class="container-menu">
      <ItemMenu :menu-items="menuItems" />
    </div>
    <div class="container-content">
      <NavBarBook />
      <router-view />
      <FooterBook />
    </div>
  </div>
</template>

<script setup>
import ItemMenu from "@/components/ItemMenu.vue";
import NavBarBook from "../components/header/NavBarBook.vue";
import FooterBook from "../components/footer/FooterBook.vue";


const menuItems = [
  {
    label: "Livros",
    route: "/register-book",
    iconPath: require("@/assets/book.svg"),
  },
  {
    label: "Feedback",
    route: "/book",
    iconPath: require("@/assets/feedback.svg"),
  },
];

function clicou(){
  console.log("Chegou")
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
* {
  background-color: #fff;
  color: #000;
}
#container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.container-menu {
  width: 30vh;
  height: 148vh;
  background-color: #fcba033d;
  color: #000;
}
.container-content {
  flex: 1;
  width: 100vh;
  height: 130vh;
}
</style>
