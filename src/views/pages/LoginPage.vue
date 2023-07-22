<template>
  <img src="../../assets/logo.svg" alt="" />
  <h1>Log In</h1>
  <p>
    Don't have account?<a href="#" @click="teste()">Create an account</a>
  </p>
  <form>
    <label for="user">Username</label>
    <input
      type="text"
      name="user"
      id="user"
      placeholder="Digite o seu usuário ..."
    />

    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Digite sua senha ... "
    />

    <a href="#">Forget Password?</a>

    <input type="submit" value="Sign In" />
  </form>
  <button type="button" @click="backToHome()">
    <i class="fa-solid fa-chevron-left"></i>Back
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// voltar para página home
function backToHome() {
  router.push("/");
}
function teste() {
  console.log("Create");
}
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
* {
  background: #fff;
}
.container {
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5%;
  margin-top: 5%;
}
.container img {
  display: flex;
  padding: 20px;
}
.container h1 {
  color: #000;
  font-size: 3em;
  text-align: center;
}
.create {
  padding-left: 20px;
}
.container p,
a {
  font-size: 12px;
  color: #000;
  text-align: center;
  padding: 10px;
}
.input-form {
  padding: 10px;
  margin-bottom: 5px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #fcba03;
}
.container-form {
  margin-left: 30%;
  margin-right: 30%;
}
.container-form label {
  color: #000;
}
.container-form a {
  display: block;
  float: right;
  padding-top: 5px;
  margin-right: 10px;
  color: #000;
  font-size: 0.8em;
}
.btn-submit {
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 50px;
  border: none;
  background-color: #fcba03;
  color: #000;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.193);
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10%;
}
.btn-back {
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;
  background-color: #000;
  border: 2px solid #fcba03;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.193);
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  text-align: ;
}
.btn-back i {
  background-color: #000;
  padding-right: 10px;
} */
</style>
