<template>
  <div id="container">
    <div class="container-menu" v-if="showSidebar">
      <ItemMenu :menu-items="menuItems" />
    </div>
    <div class="container-content">
      <HeaderBook @toggle-sidebar="toggleSidebar" />
      <router-view />
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

const menuItems = [
  {
    label: "Livros",
    route: "/create-book",
    iconPath: require("@/assets/book.svg"),
  },
  {
    label: "Feedback",
    route: "/feedback",
    iconPath: require("@/assets/feedback.svg"),
  },
];

function toggleSidebar(){
  console.log(showSidebar.value);
  showSidebar.value = !showSidebar.value;
}


// funcão para cadastrar os livros
function cadastro() {
  console.log("Teste");
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
  width: 30vh;
  /* height: calc(100vh - 2.5vh); */
  background-color: #FCBA03;
  color: #000;
}
.container-content {
  flex: 1;
}
</style>
