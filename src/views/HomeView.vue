<template>
  <div id="back">
    <Banner />

    <!-- O mesmo que <PopularBooks />-->
    <popular-books id="section-popular-books" />

    <div id="icon">
      <i class="fa-solid fa-circle-arrow-up" @click="backToStart('#back')"></i>
    </div>
  </div>
</template>

<script setup>
import Banner from "../components/Banner.vue";
import PopularBooks from "../components/contentWeb/PopularBooks.vue";

function backToStart(sectionId) {
  const element = document.querySelector(sectionId);
  if (element) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Linden+Hill&display=swap");

#icon{
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
  margin-bottom: 2%;
}

#icon i{
  cursor: pointer;
  font-size: 30px;
}
</style>
