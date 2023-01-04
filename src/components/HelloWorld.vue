<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="btn btn-success">Se connecter</button>
    <p>Vous n'avez pas un compte? <a href="#">Crée un compte</a></p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
