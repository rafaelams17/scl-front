<template>
  <div class="container">
    <h1>
      <span>
        <img src="../assets/feedback-purple.svg" alt="" />
      </span>
      Feedback to the Developer this website
    </h1>
    <p>
      Dê um breve feedback para o(a) desenvolvedor(a) desse sistema, quando você
      sentir a necessidade.
    </p>
    <textarea
      name="feedback"
      id="feedback"
      cols="90"
      rows="10"
      placeholder="Enter your feedback."
    ></textarea>

    <div class="btn">
      <input class="submit" type="submit" :value="btnSubmit" />
      <input
        class="reset"
        type="reset"
        value="Cancelar"
        @click="backToDashboard()"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const btnSubmit = "Enviar ao Dev";

function backToDashboard() {
  router.push("/book");
}
</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}
.container {
  text-align: center;
  height: 78vh;
}
.container h1 {
  margin-top: 30px;
}
.container p {
  margin-bottom: 15px;
}
#feedback {
  border: none;
  background-color: #fcba0323;
  padding: 10px;
}
#feedback:focus {
  outline: none;
}
.btn {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px;
}
.btn .submit {
  background-color: #fcba03;
  color: #000;
  border: none;
  padding: 5px 15px 5px 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
}
.btn .submit:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
.btn .reset {
  background-color: #000;
  color: #fcba03;
  border: none;
  padding: 5px 15px 5px 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
}
.btn .reset:hover {
  background-color: #000000ae;
  transition: 0.5s;
}
</style>
