<template>
  <nav class="nav-bar">
    <div>
      <img class="img-logo" alt="Books logo" src="../assets/logo.png">
    </div>
    <div>
      <router-link to="/" class="links-nav">Home</router-link> 
      <router-link to="/about-me" class="links-nav">About Me</router-link> 
      <router-link to="/popular-books" class="links-nav">+Popular Books</router-link>
      <a href="https://google.com" target="_blank"><button class="btn-login">Login</button></a>
    </div>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  padding-top: 10px;
  padding-bottom: 10px;
}
.links-nav {
  color: #FCBA03;
  font-weight: 500;
  font-size: 1em;
  text-decoration: none;
  padding-left: 15px;
  padding-right: 15px;
}

.links-nav:hover {
  padding-bottom: 5px;
  border-bottom: 2px solid #FCBA03;
  transition: .5s;
}

.img-logo {
  padding-left: 50px;
}
div .btn-login {
  background-color: #FCBA03;
  color: #000;
  font-size: 16px;
  border-radius: 30px;
  font-weight: 600;
  border: none;
  padding-left: 50px;
  padding-right: 50px;
  cursor: pointer;
  margin-right: 10px;
}

.btn-login:hover {
  background-color: #fbd15bf6;
  transition: .5s;
}
</style>
