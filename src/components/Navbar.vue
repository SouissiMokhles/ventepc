<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">MegaTech</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="user != ''">
            <router-link class="nav-link" aria-current="page" to="/allProducts"
              >Acceuil</router-link
            >
          </li>
          <li class="nav-item" v-if="user != ''">
            <router-link class="nav-link" aria-current="page" to="/myProducts"
              >Profil</router-link
            >
          </li>
        </ul>
        <div class="btn-group me-3" role="group">
          <router-link to="/signIn"
            ><button class="btn btn-outline-success" v-if="user == ''">
              Se connecter
            </button></router-link
          >
        </div>
        <div class="btn-group" role="group">
          <router-link to="/signUp"
            ><button class="btn btn-outline-primary" v-if="user == ''">
              Créer un compte
            </button></router-link
          >
        </div>
        <button
          class="btn btn-outline-danger"
          v-if="user != ''"
          v-on:click="logout()"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "../Firebase";
import router from "../router/index.js";
export default {
  name: "NavBar",
  data() {
    return {
      user: null,
      userType: "",
      userRef: firebase.firestore().collection("users"),
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            localStorage.removeItem("uid");
              router.push({ name: "home" });
          });
        });
    },
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
