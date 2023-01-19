<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import firebase from "./Firebase.js";
import Navbar from "./components/Navbar.vue";
export default {
  name: "AppVue",
  components: { Navbar },
  afterDestroyed() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        firebase.auth().onAuthStateChanged(() => {
          localStorage.clear();
        });
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
