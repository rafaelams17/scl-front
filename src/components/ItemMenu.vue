<template>
  <div class="container">
    <p>Menu</p>
    <div v-for="(item, index) in menuItems" :key="index" class="items1">
      <router-link :to="item.route" class="items">
        <img :src="item.iconPath" alt="Icon" class="items-img" />
        {{ item.label }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menuItems: Array,
});
</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}
.container {
  background: #fff;
  margin: 10px;
}
.items {
  background: transparent;
  display: flex;
  align-items: center;
}
.items-img {
  background-color: transparent;
  margin-right: 10px ;
}
.items1, p, img {
  background-color: #fca10382;
}
</style>
