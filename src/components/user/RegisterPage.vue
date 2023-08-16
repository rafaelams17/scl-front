<template>
  <div class="container">
    <form class="form" @submit.prevent="signUp()">

      <!-- Back to login page -->
      <span>
        <router-link :to="{ name: 'login' }" title="Login"><i id="backLogin" class="fa-solid fa-arrow-left"></i
        ></router-link>
      </span>

      <!-- Title main -->
      <div class="title-main">
        <i class="fa-brands fa-pushed"></i>
        <h1>Create Account</h1>
      </div>

      <div class="campo-user">
        <i class="fa-solid fa-user"></i>
        <input
          type="text"
          name="name"
          id="name"
          v-model="form.name"
          placeholder="Name"
        />

        <i class="fa-solid fa-envelope"></i>
        <input
          type="email"
          name="email"
          id="email"
          v-model="form.email"
          placeholder="Email"
        />

        <i class="fa-solid fa-lock"></i>
        <input
          type="password"
          name="password"
          id="password"
          v-model="form.password"
          placeholder="Password"
        />
        <i class="fa-solid fa-lock"></i>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>
      <input class="btn-submit" type="submit" value="Sign Up" />
    </form>
    <Message :msg="msg" v-show="msg" />
  </div>
</template>

<script setup>
import Message from "../Message.vue";
import { useRouter } from "vue-router";
import api from "../boot/axios";
import { ref } from "vue";

const msg = ref(null);

const form = ref({
  name: "",
  email: "",
  password: "",
});
const confirmPassword = ref("");

const router = useRouter();

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
      msg.value = "Campos vazios! Preencha os campos corretamente!";
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
        msg.value = "O usuário já existe!";
        setTimeout(() => (msg.value = ""), 2000);
        // se caso o usuário não exista, ele é armazenado no DB
      } else {
        // Criação do Usuário!
        if (form.value.password === confirmPassword.value) {
          const { data } = await api.post("/user", form.value);
          msg.value = "O usuário criado com sucesso!";
          setTimeout(() => (msg.value = ""), 2000);

          // retornar para login
          setTimeout(() => (msg.value = "Volte para a tela de login!"), 2500);
          setTimeout(() => (msg.value = ""), 4000);
          console.log(data);

          // limpar os campos
          form.value.name = "";
          form.value.email = "";
          form.value.password = "";
          confirmPassword.value = "";
        } else {
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

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

* {
  background-color: #fff;
  color: #000;
}
.container {
  margin: 0 auto;
  width: 80vh;
  height: 80vh;
  margin-top: 5%;
  margin-bottom: 5%;
}
.form {
  display: flex;
  flex-direction: column;
}
.title-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
}
.title-main h1 {
  font-size: 30px;
}
.title-main i {
  font-size: 25px;
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
.campo-user {
  margin: 0 auto;
  width: 60%;
  margin-bottom: 20px;
}
.btn-submit {
  background-color: #fcba03;
  color: #000;
  border: none;
  width: 60%;
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
  cursor: pointer;
  font-size: 20px;
}
@media screen and (max-width: 750px) {
  .container {
    width: 60vh;
    margin-top: 15%;
  }
  .campo-user {
    width: 80%;
  }
}
@media screen and (max-width: 600px) {
  .container {
    width: 100%;
    height: 80vh;
  }
  .campo-user {
    width: 80%;
  }
}
</style>
