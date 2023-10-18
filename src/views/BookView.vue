<template>
  <div id="container">
    <div class="container-menu" v-if="showSidebar">
      <ItemMenu :menu-items="menuItems" />
    </div>
    <div class="container-content">
      <HeaderBook @toggle-sidebar="toggleSidebar" />
      <router-view :class="{ active: classVar }" />
      <FooterBook :lowerBackground="type" />
    </div>
  </div>
</template>

<script setup>
import ItemMenu from "@/components/book/ItemMenu.vue";
import HeaderBook from "../components/book/HeaderBook.vue";
import FooterBook from "../components/book/FooterBook.vue";
import { ref } from "vue";

const showSidebar = ref(false);
const type = ref(null);
let classVar = false;

const menuItems = [
  {
    label: "Dashboard",
    route: "/book",
    iconPath: require("@/assets/dashboard_menu.svg"),
  },
  {
    label: "Livros",
    route: "/book/listagem",
    iconPath: require("@/assets/book.svg"),
  },
];

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;

  if (!showSidebar.value) {
    classVar = showSidebar.value;
  } else {
    classVar = showSidebar.value;
  }
}
</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}
#container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}
.container-menu {
  background-color: #fcba03;
  color: #000;
}
.container-content {
  flex: 1;
}
.active {
  margin: 0 25px 0 25px;
}
</style>
