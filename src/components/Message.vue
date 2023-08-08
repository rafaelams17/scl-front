<template>
  <div class="msg-container">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
};
</script>

<style scoped>
.msg-container {
  background-color: #cce5ff;
  border: 1px solid #88daff;
  border-radius: 5px;
  padding: 5px;
  max-width: 60%;
  text-align: center;
  margin: 30px auto;
}
.msg-container p {
  background-color: #cce5ff;
  color: #004085;
}

</style>
