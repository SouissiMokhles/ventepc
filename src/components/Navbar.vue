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
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Email" aria-label="Email">
        <input class="form-control me-2" type="search" placeholder="Mot de passe" aria-label="Mdp">
        <button class="btn btn-outline-success col-3" type="submit">Se connecter</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
