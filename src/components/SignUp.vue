<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <form class="row g-3 col-6" @submit.prevent="registerUser()">
        <div class="col-md-6">
          <label for="inputName" class="form-label">Prénom</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            v-model="user.name"
          />
        </div>
        <div class="col-md-6">
          <label for="inputFamName" class="form-label">Nom</label>
          <input
            type="text"
            class="form-control"
            id="inputFamName"
            v-model="user.famName"
          />
        </div>
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
        <div class="col-md-12">
          <label for="inputState" class="form-label">Type</label>
          <select id="inputState" class="form-select" v-model="user.type">
            <option selected>Choisir...</option>
            <option>Acheteur</option>
            <option>Vendeur</option>
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Créer un compte</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router/index.js";
import firebase from "../Firebase";
export default {
  name: "SignUp",
  data() {
    return {
      user: {
        name: "",
        famName: "",
        email: "",
        pwd: "",
        type: "",
        uid: "",
      },
      errorMessage: "",
      ref: firebase.firestore().collection("users"),
    };
  },
  methods: {
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.pwd)
        .then((userData) => {
          this.ref.add({
            name: this.user.name,
            famName: this.user.famName,
            email: this.user.email,
            type: this.user.type,
            uid: userData.user.uid,
          });
          router.push({ name: "allProducts" });
        });
    },
  },
};
</script>
