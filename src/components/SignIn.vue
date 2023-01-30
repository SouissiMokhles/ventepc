<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <form class="row g-3 col-6" @submit.prevent="loginUser()">
        <div class="col-12">
          <label for="inputEmail" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            v-model="user.email"
          />
        </div>
        <div class="col-12">
          <label for="inputPassword" class="form-label">Mot de passe</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            v-model="user.pwd"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Se connecter</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "../Firebase";
import router from "../router/index.js";
export default {
  name: "SignIn",
  data() {
    return {
      user: {
        email: "",
        pwd: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    loginUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.pwd)
        .then((userData) => {
          localStorage.setItem("uid", userData.user.uid);
          router.push({ name: "allProducts" });
        })
        .catch(() => {
          this.errorMessage = "Email et mot de passe non valide";
        });
    },
  },
};
</script>
