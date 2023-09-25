<template>
  <div class="container">
    <p>SGL</p>
    <div v-for="(item, index) in menuItems" :key="index" class="container-items">
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
.container p {
  font-size: 14px;
  padding-bottom: 10px;
  color: #504f4f;
}
.items {
  background: transparent;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
}
.items:hover {
  transition: .5s;
  background-color: #ffffff57;
}
.items-img {
  background-color: transparent;
  margin-right: 10px;
  padding-left: 10px;
}
.container-items, p, img {
  background-color: #FCBA03;
}
</style>
