<template>
  <div class="container">
    <!-- Imagem -->
    <img id="container-img" src="../assets/image-book.svg" alt="books" />

    <!-- Form -->
    <div class="container-form">
      <!-- Back to login page -->
      <i id="backLogin" class="fa-solid fa-arrow-right" @click="backToLogin()" title="Login"></i>
      <form @submit.prevent="signUp()">

        <div class="container-title">
          <img src="../assets/logo.svg" alt="" />
          <h1>Create Account</h1>
          <div class="subtitle">
            <p>WELCOME TO THE WEBSITE</p>
          </div>
        </div>

        <!-- Realizar o cadastro do usuário -->
        <div class="container-input">
          <label for="Name">
            Name <span class="campo-obrigatorio">*</span>
          </label>
            <div class="container-inputs">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                v-model="form.name"
              />
              <i class="fa-solid fa-user"></i>
            </div>
      
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

          <input class="btn-submit" type="submit" value="Sign Up" />
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
  name: "",
  email: "",
  password: "",
});
const confirmPassword = ref("");

// criar um usuário
async function signUp() {
  try {
    // verificar se os campos estão vazios
    if (
      !form.value.name ||
      !form.value.email ||
      !form.value.password ||
      !confirmPassword.value
    ) {
      type.value = "error";
      msg.value = "Preencha os campos corretamente!";
      setTimeout(() => (msg.value = ""), 2000);
    } else {
      // pegar os dados da API
      const { data } = await api.get("/user");
      let userExists = false;

      // verifica se o usuário já existe
      for (var i = 0; i < data.length; i++) {
        if (form.value.email == data[i].email) {
          userExists = true;
        }
      }

      if (userExists) {
        type.value = "error";
        msg.value = "O usuário já existe!";
        setTimeout(() => (msg.value = ""), 2000);
        // se caso o usuário não exista, ele é armazenado no DB
      } else {
        // Criação do Usuário!
        if (form.value.password === confirmPassword.value) {
          const { data } = await api.post("/user", form.value);
          type.value = "sucess";
          msg.value = "O usuário criado com sucesso!";
          setTimeout(() => (msg.value = ""), 2000);

          // retornar para login
          setTimeout(() => (msg.value = "Volte para a tela de login!"), 2500);
          setTimeout(() => (msg.value = ""), 4000);

          // limpar os campos
          form.value.name = "";
          form.value.email = "";
          form.value.password = "";
          confirmPassword.value = "";
        } else {
          type.value = "error";
          msg.value = "As senhas informadas não coincidem!";
          setTimeout(() => (msg.value = ""), 2000);
          form.value.password = "";
          confirmPassword.value = "";
        }
      }
    }
  } catch (error) {
    if (error.response) {
      console.log("Server responded with:", error.response.data);
      console.log("HTTP status code:", error.response.status);
    } else {
      console.log("Error details:", error.message);
    }
  }
}
// Função para voltar para a tela de login
function backToLogin() {
  router.push({ name: "login" });
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
#name,
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
#name:focus,
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
