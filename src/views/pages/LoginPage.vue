<template>
  <div class="container">
    <div class="container-title">
      <img src="../../assets/logo.svg" alt="" />
      <h1>Log In</h1>
    </div>

    <div class="container-create">
      <p>Don't have account?</p>
      <a href="#" @click="teste()">Create an account</a>
    </div>

    <form class="container-form">
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
      <a class="container-forget" href="#">Forget Password?</a>
      <input class="btn-submit" type="submit" value="Sign In" />
    </form>
    <button class="btn-back" type="button" @click="backToHome()">
      <i class="fa-solid fa-chevron-left"></i>Back
    </button>
  </div>
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
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

* {
  background: #1b1a17;
}
.container {
  height: 85vh;
  width: 350px;
  margin: 0 auto;
  margin-bottom: 5%;
  margin-top: 5%;
  border-style: inset;
  border: 2px solid #fcba03;
  border-radius: 15px;
}
.container-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15%;
  border-radius: 15px;
}
.container-title img {
  width: 60px;
}
.container-create {
  font-size: 12px;
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
  padding: 10px;
}
.container-form #user, #password {
  border: none;
  border-bottom: 2px solid #fcba03;
  margin-top: 2%;
  margin-bottom: 2%;
}
.container-forget {
  font-size: 12px;
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
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10%;
}
.btn-submit:hover {
  transition: .5s;
  background-color: #fbd15bf6;
}
.btn-back {
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;
  background-color: #000;
  border: 2px solid #fcba03;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.193);
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
}
.btn-back i {
  background-color: #000;
  padding-right: 10px;
} 
</style>
