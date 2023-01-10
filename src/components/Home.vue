<template>
  <div class="home">
    <img alt="Vue logo" class="img-thumbnail mt-3" src="../assets/logo.png" />
    <h1>Bienvenu dans votre magasin informatique</h1>
    <router-link to="/signIn"><button class="btn btn-success">Se connecter</button></router-link>
    <p>Vous n'avez pas un compte? <router-link to="/signUp">Crée un compte</router-link></p>
  </div>
</template>

<script>
export default {
  name: "HomeVue",
  props: {
    msg: String,
  },
};
</script>
