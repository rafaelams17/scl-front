<template>
  <div class="container-form">
    <i class="fa-solid fa-arrow-right backLogin" @click="backToLogin()"></i>

    <form @submit.prevent="forgetPassword()">
      <div class="container-title">
        <img src="../../assets/logo.svg" alt="" />
        <h1>Reset your password</h1>
        <p>
          Please Enter Your Email Address To Verification on the database, if you
          have account.
        </p>
      </div>

      <!-- Realizar o login do usuário -->
      <div class="container-input">
        <label for="email">Email <span class="campo-obrigatorio">*</span></label>
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
        <div v-if="email">
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
              v-model="form.password"
            />
            <i class="fa-solid fa-lock icon"></i>
          </div>
        </div>
        <input class="btn-submit" type="submit" value="Send" />
      </div>
      <Message :msg="msg" v-show="msg" :backgroundColorClass="type" />
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
// import api from "../../boot/axios";
import Message from "../../components/Message.vue";

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
  font-size: 35px;
  margin-bottom: 2%;
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
  margin-top: 10px;
}
.btn-submit:hover {
  transition: 0.5s;
  background-color: #fbcd01;
}
.backLogin {
  width: 60px;
  float: right;
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
}
@media screen and (max-width: 1400px) {
  .input-icons input {
    width: 100%;
  }
}
@media screen and (max-width: 1370px) {
  .input-icons {
    width: 100%;
  }
}
/* Tablets and iPad*/
@media screen and (max-width: 1200px) {
  .container-title h1 {
    font-size: 25px;
  }
  .container-title p {
    font-size: 15px;
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
