<template>
  <div class="container">
    <form class="form">
      <a href="#" @click="backToLogin()" title="Login"
        ><i id="backHome" class="fa-solid fa-arrow-left"></i
      ></a>
      <div class="title-main">
        <i class="fa-brands fa-pushed"></i>
        <h1>Reset your password</h1>
      </div>

      <div class="campo-user">
        <p>Please Enter Your Email Address To Verification, if you have account.</p>
        <i class="fa-solid fa-envelope"></i>
        <input type="email" name="email" id="email" placeholder="Email" />

        <div v-if="email">
          <i class="fa-solid fa-lock"></i>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <i class="fa-solid fa-lock"></i>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
        </div>
      </div>
      <input class="btn-submit" type="submit" value="Send" />
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const email = false;
const router = useRouter();

// voltar para página login
function backToLogin() {
  router.push("/login");
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
#email, #password,
#confirmPassword {
  display: flex;
  width: 100%;
  border: none;
  border-bottom: 2px solid #fcba03;
  margin-top: 2%;
  margin-bottom: 2%;
}
#email:focus, #password:focus, #confirmPassword:focus  {
  outline: none;
}
.campo-user {
  margin: 0 auto;
  width: 60%;
  margin-bottom: 20px;
}
.campo-user p {
  font-size: 12px;
  text-align: center;
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
#backHome{
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
