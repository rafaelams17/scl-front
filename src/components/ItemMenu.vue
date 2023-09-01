<template>
  <div class="container">
    <ul>
      <p>Menu</p>
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="item.route" class="items">
          <img :src="item.iconPath" alt="Icon" class="" />
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  menuItems: Array
});
</script>

<style scoped>
* {
  background: transparent;
  color: #000;
}
.container {
  margin: 10px;
}
ul {
  background-color: #fcba033d;
}
p {
  font-size: 14px;
  color: #0000009a;
  margin-bottom: 10px;
}
li {
  list-style-type: none;
  margin-left: 10px;
}
.items {
  display: flex;
  align-items: center;
}
img {
  margin-right: 5px;
}
</style>
