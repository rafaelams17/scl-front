<template>
  <div class="container">
    <!-- Imagem -->
    <img id="container-img" src="../assets/image-book.svg" alt="books" />

    <!-- Form -->
    <div class="container-form">
      <!-- Back to home page -->
      <i id="backHome" class="fa-solid fa-x" @click="backToHome()" title="Home"></i>
      <form @submit.prevent="signIn()">

        <div class="container-title">
          <img src="../assets/logo.svg" alt="" />
          <h1>Log In</h1>
          <div class="subtitle">
            <p>Don't have account?</p>
            <router-link :to="{ name: 'register' }" id="create">
              Create an account
            </router-link>
          </div>
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

          <!-- Go to forget password page = recuperar a senha de um usuário -->

          <div class="forget-password">
            <router-link :to="{ name: 'forget-password' }" id="forget"
              >Forget Password?</router-link
            >
          </div>

          <input class="btn-submit" type="submit" value="Sign In" />
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

const router = useRouter();
const msg = ref(null);
const type = ref(null);

const form = ref({
  email: "",
  password: "",
});

// realizar o login do usuário
async function signIn() {
  try {
    if (!form.value.email || !form.value.password) {
      type.value = "error";
      msg.value = "Preencha os campos corretamente!";
      setTimeout(() => (msg.value = ""), 2000);
    }

    const body = {
      email: form.value.email,
      password: form.value.password,
    };

    const { data } = await api.post("/login", body); // acessa os usuários para fazer a verificação

    if (data.acess_token) {
      type.value = "sucess";
      msg.value = "Login feito com sucesso!";
      setTimeout(() => (msg.value = ""), 1000);
      setTimeout(() => router.push("/book"), 1000); // realiza o login
    }
  } catch (error) {
    if (error.response) {
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
  text-transform: uppercase;
  font-size: 50px;
}
.subtitle {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 3%;
}

.container-form {
  flex: 1;
}
.container-form form {
  margin: 100px;
}
.container-inputs {
  display: flex;
  flex-direction: row;
}
.campo-obrigatorio {
  color: #ff0000;
}
#create:hover {
  color: #fca903;
  transition: 0.5s ease;
}
#email,
#password {
  display: flex;
  width: 100%;
  border: none;
  border-bottom: 2px solid #fcba03;
  margin-top: 2%;
  margin-bottom: 2%;
}
#email:focus,
#password:focus {
  outline: none;
}
.forget-password {
  font-size: 12px;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 20px;
}
.forget-password #forget:hover {
  color: #fca103;
  transition: 0.5s;
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
}
.btn-submit:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
#backHome {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  font-size: 20px;
}
</style>
