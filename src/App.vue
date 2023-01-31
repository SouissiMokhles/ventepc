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
  background: linear-gradient(to right, #130091, #585378);
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b2d5f3;
}
</style>
