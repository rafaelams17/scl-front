<template>
  <div class="container-form">
    <i class="fa-solid fa-arrow-right backLogin" @click="backToLogin()"></i>
    <!-- Form -->
    <form @submit.prevent="signUp()">
      <!-- Title -->
      <div class="container-title">
        <img src="../../assets/logo.svg" alt="" />
        <h1>Create Account</h1>
        <p>Welcome to the Website</p>
      </div>

      <!-- Realizar o cadastro do usuário -->
      <div class="container-input">
        <label for="name">Name <span class="campo-obrigatorio">*</span></label>
        <div class="input-icons">
          <input
            class="input-field"
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

        <label for="confirmPassword"
          >Confirm Password <span class="campo-obrigatorio">*</span></label
        >
        <div class="input-icons">
          <input
            class="input-field"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="***************"
            v-model="confirmPassword"
          />
          <i class="fa-solid fa-lock icon"></i>
        </div>

        <input class="btn-submit" type="submit" value="Sign Up" />
      </div>
      <Message :msg="msg" v-show="msg" :backgroundColorClass="type" />
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import api from "../../boot/axios";
import Message from "../../components/Message.vue";

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
/* Image - Tablets, Laptop and Computers */
#container-img {
  height: 100vh;
  width: 130vh;
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
  font-size: 40px;
}
.container-title p {
  display: flex;
  justify-content: center;
  margin-bottom: 3%;
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
#name:focus,
#email:focus,
#password:focus,
#confirmPassword:focus {
  outline: none;
}
.campo-obrigatorio {
  color: #ff0000;
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
.backLogin {
  width: 60px;
  float: right;
  padding: 20px;
  cursor: pointer;
  font-size: 20px;
}
@media screen and (max-width: 1400px) {
  .input-icons input {
    width: 50%;
  }
  #container-img {
    width: 90vh;
  }
}
@media screen and (max-width: 1370px) {
  .input-icons {
    width: 100%;
  }
  #container-img {
    width: 130vh;
  }
}
/* Tablets and iPad*/
@media screen and (max-width: 1200px) {
  .container-title h1 {
    font-size: 25px;
  }
}
/* Tablets and iPad*/
@media screen and (max-width: 1000px) {
  #container-img {
    display: none;
  }
  .container {
    height: 100vh;
  }
  .container-title h1 {
    font-size: 35px;
  }
}
</style>
