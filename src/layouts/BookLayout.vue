<template>
  <div id="container">
    <div class="container-menu" v-if="showSidebar">
      <ItemMenu :menu-items="menuItems" />
    </div>
    <div class="container-content">
      <NavBarBook @toggle-sidebar="toggleSidebar" />
      <router-view />
      <FooterBook :lowerBackground="type" class="teste" />
    </div>
  </div>
</template>

<script setup>
import ItemMenu from "@/components/ItemMenu.vue";
import NavBarBook from "../components/header/NavBarBook.vue";
import FooterBook from "../components/footer/FooterBook.vue";
import { ref } from "vue";

const showSidebar = ref(false);
const type = ref(null);

const menuItems = [
  {
    label: "Livros",
    route: "/register-book",
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

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
* {
  background-color: #fff;
  color: #000;
}
#container {
  position: relative;
  display: flex;
  flex-direction: row;
}
.container-menu {
  width: 30vh;
  background-color: #fcba033d;
  color: #000;
}
.container-content {
  flex: 1;
  width: 100vh;
  height: 100vh;
}
</style>
