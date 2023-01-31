<template>
  <div class="home">
    <h1>Bienvenu dans votre magasin informatique</h1>
    <router-link to="/signIn"
      ><button class="btn btn-success" v-if="user ==''">Se connecter</button></router-link
    >
    <p>
      Vous n'avez pas un compte?
      <router-link to="/signUp" v-if="user == ''">Crée un compte</router-link>
    </p>
  </div>
</template>

<script>
import firebase from '../Firebase'
export default {
  name: "HomeVue",
  data(){
    return{
      user : null
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        this.user = authUser;
      } else {
        this.user = "";
      }
    });
  },
};
</script>
