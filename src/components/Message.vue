<template>
  <div class="msg-container" :class="backgroundColorClass">
    <p>{{ msg }}</p>
  </div>
</template>

<script scoped>
import { computed, ref } from 'vue';

let isActionDone = ref(false);

export default {
  props: {
    msg: String, 
    backgroundColorClass: String,
  },
};
</script>

<style scoped>
.msg-container {
  font-size: 14px;
  padding: 5px;
  max-width: 60%;
  text-align: center;
  margin: 30px auto;
}
.sucess {
  border: none;
  background-color: #cce5ff;
  border: 1px solid #88daff;
}
.sucess p {
  background-color: #cce5ff;
  color: #004085;
}

.error {
  border: none;
  background-color: #ffcccc;
  border: 1px solid #ff8888;
}
.error p {
  background-color: #ffcccc;
  color: #850000;
}
</style>
