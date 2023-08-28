<template>
  <div class="teste">
    <ul>
      <p>Menu</p>
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="item.route">
          <img :src="item.iconPath" alt="Icon" />
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  menuItems: Array,
});
</script>

<style scoped>
* {
    background-color: #fcba033d;
    color: #000;
}
li {
    list-style-type: none;
}

</style>
