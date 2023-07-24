<template>
  <div class="container">
    <form class="container-form">
      <div class="container-title">
        <img src="../../assets/logo.svg" alt="" />
        <h1>Reset your password</h1>
      </div>

      <label for="password">New Password</label>
      <input
        type="password"
        name="newPassword"
        id="newPassword"
        placeholder="New Password ... "
      />
      <label for="confirmPassword">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password ... "
      />
      <input class="btn-submit" type="submit" value="Reset Password" />
      <button class="btn-back" type="button" @click="backToLogin()">
        <i class="fa-solid fa-chevron-left"></i>Back
      </button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// voltar para página login
function backToLogin() {
  router.push("/login");
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
  margin-top: 10%;
}
.container-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  padding-top: 15%;
  border-radius: 15px;
}
.container-title h1 {
  padding-bottom: 20px;
}
.container-title img {
  width: 60px;
}
.container-form {
  display: flex;
  flex-direction: column;
  height: 600px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 15px;
  border-radius: 15px;
  border: 2px solid #fcba03;
}
.container-form label {
  font-size: 16px;
}
.container-form #newPassword,
#confirmPassword {
  border: none;
  border-bottom: 2px solid #fcba03;
  font-size: 16px;
  margin-top: 2%;
  margin-bottom: 2%;
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
  transition: 0.5s;
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
    font-size: 24px;
  }
  .container-form label {
    font-size: 14px;
  }
}
</style>
