<template>
  <div class="container">
    <form class="form" @submit.prevent="signIn()">
      <a href="#" @click="backToHome()" title="Home"
        ><i id="backHome" class="fa-solid fa-house"></i
      ></a>
      <div class="title-main">
        <i class="fa-brands fa-pushed"></i>
        <h1>Log In</h1>
      </div>
      <div class="create-account">
        <p>Don't have account?</p>
        <a href="#" @click="registerUser()">Create an account</a>
      </div>
      <div class="campo-user">
        <i class="fa-solid fa-envelope"></i>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          v-model="form.email"
        />
        <i class="fa-solid fa-lock"></i>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          v-model="form.password"
        />
      </div>
      <a class="forget-password" href="#" @click="forgetPassword()"
        >Forget Password?</a
      >
      <input class="btn-submit" type="submit" value="Sign In" />
    </form>
    <Message :msg="msg" v-show="msg" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import api from "../../../axios";
import { onMounted, ref } from "vue";
import Message from "../Message.vue";

const msg = ref(null);

const router = useRouter();
const form = ref({
  email: "",
  password: "",
});

// voltar para página home
function backToHome() {
  router.push("/");
}
// cadastrar um usuário
function registerUser() {
  router.push("/register");
}
// recuperar a senha de um usuário
function forgetPassword() {
  router.push("/forget-password");
}

// realizar o login do usuário
async function signIn() {
  try {
    const { data } = await api.get("/user"); // para extrair os dados do formulário

    for (var i = 0; i < data.length; i++) {
      if (
        form.value.email === data[i].email &&
        form.value.password === data[i].password
      ) {
        router.push("/"); // realiza o login
      } else if (!form.value.email || !form.value.password) {
        msg.value = "Campos vazios! Preencha os campos corretamente!";
        setTimeout(() => (msg.value = ""), 2000);
      } else {
        msg.value = "Usuário ou senha inválido!";
        setTimeout(() => (msg.value = ""), 2000);
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
  font-size: 30px;
  padding-top: 5%;
}
.create-account {
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 15px;
}
.create-account a:hover {
  color: #fca103;
  transition: 0.5s;
}
.title-main h1 {
  font-size: 35px;
}
.title-main i {
  font-size: 25px;
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
.campo-user {
  margin: 0 auto;
  width: 60%;
}
.forget-password {
  font-size: 12px;
  margin: 0 auto;
  width: 60%;
  margin-top: 5px;
  margin-bottom: 20px;
}
.forget-password:hover {
  color: #fca103;
  transition: 0.5s;
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
#backHome {
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
  .forget-password {
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
  .forget-password {
    width: 80%;
  }
}
</style>
