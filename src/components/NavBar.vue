<template>
  <nav class="nav-bar">
    <div>
      <img class="img-logo" alt="Books logo" src="../assets/logo.png">
    </div>
    <div class="links-nav">
      <router-link to="/" class="links-nav">Home</router-link> 
      <router-link to="/about-me" class="links-nav">About Me</router-link> 
      <router-link to="/popular-books" class="links-nav">+Popular Books</router-link>
      <button class="btn-login">Login</button>
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
  font-size: 1em;
  text-decoration: none;
  padding-left: 15px;
  padding-right: 15px;
}

.links-nav a:hover {
  padding-bottom: 5px;
  border-bottom: 2px solid #FCBA03;
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
}

</style>
