<template>
  <div class="container">
    <!-- Imagem -->
    <img id="container-img" src="../assets/image-book.svg" alt="books" />

    <!-- Form -->
    <div class="container-form">
      <!-- Back to login page -->
      <i id="backLogin" class="fa-solid fa-arrow-right" @click="backToLogin()" title="Login"></i>
      <form @submit.prevent="forgetPassword()">

        <div class="container-title">
          <img src="../assets/logo.svg" alt="" />
          <h1>Reset your password</h1>
          <p>
            Please Enter Your Email Address To Verification, if you have
            account.
          </p>
        </div>

        <!-- Realizar o login do usuário -->
        <div class="container-input">
          <label for="email"
            >Email <span class="campo-obrigatorio">*</span></label
          >
          <div class="container-inputs">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              v-model="form.email"
            />
            <i class="fa-solid fa-envelope"></i>
          </div>

          <div v-if="email">
            <label for="password"
              >Password <span class="campo-obrigatorio">*</span></label
            >
            <div class="container-inputs">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="***************"
                v-model="form.password"
              />
              <i class="fa-solid fa-lock"></i>
            </div>

            <label for="password"
              >Confirm Password <span class="campo-obrigatorio">*</span></label
            >
            <div class="container-inputs">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="***************"
                v-model="form.confirmPassword"
              />
              <i class="fa-solid fa-lock"></i>
            </div>
          </div>

          <input class="btn-submit" type="submit" value="Send" />
        </div>
        <Message :msg="msg" v-show="msg" :backgroundColorClass="type" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import api from "../boot/axios";
import Message from "../components/Message.vue";

const email = false;
const router = useRouter();
const msg = ref(null);
const type = ref(null);

const form = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

// voltar para página login
function backToLogin() {
  router.push("/login");
}

// função para atualizar a senha do usuário
async function forgetPassword() {
  type.value = "error";
  msg.value = "Preencha os campos corretamente!";
  setTimeout(() => (msg.value = ""), 2000);
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

* {
  background-color: #fff;
  color: #000;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#container-img {
  height: 100vh;
}
.container-title {
  text-align: center;
}
.container-title h1 {
  font-size: 40px;
}
.container-title p {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 3%;
}

.container-form {
  flex: 1;
}
.container-form > form {
  margin-left: 20%;
  margin-right: 20%;
}
.container-inputs {
  display: flex;
  flex-direction: row;
}
.campo-obrigatorio {
  color: #ff0000;
}
#email,
#password, 
#confirmPassword {
  display: flex;
  width: 100%;
  border: none;
  border-bottom: 2px solid #fcba03;
  margin-top: 2%;
  margin-bottom: 2%;
}
#email:focus,
#password:focus, 
#confirmPassword:focus {
  outline: none;
}
.btn-submit {
  background-color: #fcba03;
  color: #000;
  border: none;
  width: 100%;
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}
.btn-submit:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
#backLogin {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  font-size: 20px;
}
</style>
