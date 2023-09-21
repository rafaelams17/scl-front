<template>
  <div class="container-form">
    <!-- Back to home page -->
    <i class="fa-solid fa-x backHome" title="home" @click="backToHome()"></i>
    <form @submit.prevent="signIn()">
      <!-- Title -->
      <div class="container-title">
        <img src="../../assets/logo.svg" alt="" />
        <h1>Log In</h1>
        <div class="subtitle">
          <p>Don't have account?</p>
          <router-link :to="{ name: 'create-user' }" id="create">
            Create an account
          </router-link>
        </div>
      </div>

      <!-- Realizar o login do usuário -->
      <div>
        <label for="email"
          >Email <span class="campo-obrigatorio">*</span></label
        >
        <div class="input-icons">
          <input
            class="input-field"
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            v-model="form.email"
          />
          <i class="fa-solid fa-envelope icon"></i>
        </div>
        <label for="password"
          >Password <span class="campo-obrigatorio">*</span></label
        >
        <div class="input-icons">
          <input
            class="input-field"
            type="password"
            name="password"
            id="password"
            placeholder="***************"
            v-model="form.password"
          />
          <i class="fa-solid fa-lock icon"></i>
        </div>
      </div>
      <!-- Go to forget password page = recuperar a senha de um usuário -->
      <router-link :to="{ name: 'forget-password' }" class="forget-password"
        >Forget Password?</router-link
      >

      <input class="btn-submit" type="submit" value="Sign In" />
      <Message :msg="msg" v-show="msg" :backgroundColorClass="type" />
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import api from "@/boot/axios";
import Message from "../../components/Message.vue";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const msg = ref(null);
const type = ref(null);
const auth = useAuthStore();

const form = ref({
  email: "rafaela@example.com", // passando para facilitar, depois remover
  password: "123@mudaR",
});

// realizar o login do usuário
async function signIn() {
  try {
    if (!form.value.email || !form.value.password) {
      type.value = "error";
      msg.value = "Preencha os campos corretamente!";
      setTimeout(() => (msg.value = ""), 2000);
    }

    const { data } = await api.post("/login", form.value); // acessa os usuários para fazer a verificação

    // Armazenar o token e o id_user no armazenamento local
    auth.setToken(data.acess_token);
    auth.setUser(data.id_user);

    if (data.acess_token) {
      type.value = "sucess";
      msg.value = "Login feito com sucesso!";

      setTimeout(() => (msg.value = ""), 1000);
      setTimeout(() => router.push("/book"), 1000); // realiza o login
    }
  } catch (error) {
    if (error.response) {
      type.value = "error";
      msg.value = "Preencha os campos corretamente!";
      setTimeout(() => (msg.value = ""), 2000);
      
      console.log("Server responded with:", error?.response?.data);
      console.log("HTTP status code:", error.response.status);
    } else {
      console.log("Error details:", error.message);
    }
  }
}

// Função para voltar para a tela principal
function backToHome() {
  router.push({ name: "home" });
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

* {
  background-color: #fff;
  color: #000;
}
.container-form {
  flex: 1;
  box-sizing: border-box;
}
.container-form > form {
  margin: 8%;
}
.container-title {
  text-align: center;
}
.container-title h1 {
  font-size: 50px;
  padding-bottom: 10px;
}
.subtitle {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 3%;
}
#create {
  color: #fca903;
}
#create:hover {
  color: #fca10382;
  transition: 0.5s ease;
}
.input-field {
  width: 100%;
}
.input-icons input {
  border: none;
}
.input-icons input,
i {
  background-color: transparent;
}
.input-icons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #fcba033d;
  margin-top: 2%;
  margin-bottom: 2%;
}
#email:focus,
#password:focus {
  outline: none;
}
.campo-obrigatorio {
  color: #ff0000;
}
.forget-password {
  color: #fca903;
  font-size: 13px;
}
.forget-password:hover {
  color: #fca10382;
  transition: 0.5s ease;
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
  margin-top: 15px;
}
.btn-submit:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
.backHome {
  width: 60px;
  float: right;
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
}
@media screen and (max-width: 1400px) {
  .input-icons input {
    width: 50%;
  }
}
@media screen and (max-width: 1370px) {
  .input-icons {
    width: 100%;
  }
}
@media screen and (max-width: 1200px) {
  .container-title h1 {
    font-size: 35px;
  }
  .subtitle p,
  #create {
    display: flex;
    gap: 5px;
    font-size: 14px;
  }
}
/* Tablets */
@media screen and (max-width: 1000px) {
  #container-img {
    display: none;
  }
  .container {
    height: 100vh;
  }
  .container-form > form {
    margin-top: 50px;
  }
  .container-title h1 {
    font-size: 50px;
  }
}
@media screen and (max-width: 450px) {
  .container {
    height: 120vh;
  }
}
@media screen and (max-width: 350px) {
  .subtitle p,
  #create {
    display: flex;
    gap: 5px;
    font-size: 12px;
  }
  .input-icons input {
    width: 80%;
  }
}
</style>
