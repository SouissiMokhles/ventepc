<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand nav-link" to="/">MegaTech</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/allProducts"
              >Touts les produits</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/myProducts"
              >Mes produits</router-link
            >
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a class="btn btn-outline-primary my-2 my-sm-0">Search</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
