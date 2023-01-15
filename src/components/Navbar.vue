<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">MegaTech</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Acceuil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/allProducts">Touts les produits</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/myProducts">Mes produits</router-link>
        </li>
      </ul>
      <div class="btn-group me-3" role="group">
        <router-link to="/signIn"><button class="btn btn-outline-success">Se connecter</button></router-link>
        </div>
        <div class="btn-group" role="group">
        <router-link to="/signUp"><button class="btn btn-outline-primary">Créer un compte</button></router-link>
        </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
