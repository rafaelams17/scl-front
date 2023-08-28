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
    iconPath: require("@/assets/dashboard.svg"),
  },
  {
    label: "Feedback",
    route: "/book",
    iconPath: require("@/assets/dashboard.svg"),
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
* {
  background-color: #fff;
  color: #000;
}
#container {
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.container-menu {
  flex: 1;
  background-color: #fcba033d;
  color: #000;
}
.container-content {
  flex: 2;
}
</style>
