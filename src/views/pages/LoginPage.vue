<template>
  <div class="container">
    <form class="container-form">
        <div class="container-title">
      <img src="../../assets/logo.svg" alt="" />
      <h1>Log In</h1>
    </div>

    <div class="container-create">
      <p>Don't have account?</p>
      <a href="#" @click="registerUser()">Create an account</a>
    </div>
      <label for="user">Username</label>
      <input
        type="text"
        name="user"
        id="user"
        placeholder="User ... "
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password ... "
      />
      <a class="container-forget" href="#" @click="forgetPassword()">Forget Password?</a>
      <input class="btn-submit" type="submit" value="Sign In" />
      <button class="btn-back" type="button" @click="backToHome()">
          <i class="fa-solid fa-chevron-left"></i>Home
      </button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// voltar para página home
function backToHome() {
  router.push("/");
}
function registerUser() {
    router.push("/register");
}
function forgetPassword() {
  router.push('/forget-password');
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

* {
  background: #1b1a17;
}
.container {
  width: 500px;
  margin: 0 auto;
  border-radius: 15px;
}
.container-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  border-radius: 15px;
}
.container-title h1 {
  font-size: 2.5em;
}
.container-title img {
  width: 60px;
}
.container-create {
  font-size: 14px;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 5px;
}
.container-create a:hover {
  color: #faebd7;
  transition: .5s;
}
.container-form {
  display: flex;
  flex-direction: column;
  height: 500px;
  font-size: 18px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #fcba03;
  margin-top: 8%;
}
.container-form label {
  font-size: 16px;
}
.container-form #user, #password {
  border: none;
  border-bottom: 2px solid #fcba03;
  font-size: 16px;
  margin-top: 2%;
  margin-bottom: 2%;
}
.container-forget {
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
}
.container-forget:hover {
  color: aliceblue;
  transition: .5s;
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
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 10%;
}
.btn-submit:hover {
  transition: .5s;
  background-color: #fbd15bf6;
}
.btn-back {
  border-radius: 50px;
  background-color: #000;
  border: 2px solid #fcba03;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.193);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  width: 100px;
}
.btn-back i {
  background-color: #000;
  padding-right: 10px;
} 
@media screen and (max-width: 600px) {
  .container {
    width: 450px;
  }
}
@media screen and (max-width: 500px) {
  .container {
    width: 400px;
  }
}
@media screen and (max-width: 400px) {
  .container {
    width: 350px;
  }
  .container-title h1 {
    font-size: 35px;
  }
  .container-form label {
    font-size: 14px;
  }
  .container-create {
    font-size: 12px;
    gap: 5px;
    padding-bottom: 10px;
  }
}
</style>
