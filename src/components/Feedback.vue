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
      v-model="messageDev"
      placeholder="Enter your feedback."
    ></textarea>

    <div class="btn">
      <input class="submit" type="button" :value="btnSubmit" @click="send()" />
      <input
        class="reset"
        type="reset"
        value="Cancelar"
        @click="backToDashboard()"
      />
    </div>
    <Message :msg="msg" v-show="msg" :backgroundColorClass="type" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Message from "./Message.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const btnSubmit = "Enviar ao Dev";
const msg = ref(null);
const type = ref(null);
const messageDev = ref("");

function backToDashboard() {
  router.push("/book");
}

function send() {
  console.log("Clicou aqui!")
  if(!messageDev.value){
    type.value = "error";
    msg.value = "Preencha os campos corretamente!";
    setTimeout(() => (msg.value = ""), 2000);
  } else {
    // enviar a message para o servidor
  }
}
</script>

<style scoped>
* {
  background-color: #fff;
  color: #000;
}
.container {
  text-align: center;
  height: 100vh;
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
