<template>
  <div class="home">
    <img alt="Vue logo" class="img-thumbnail" src="../assets/logo.png">
    <HelloWorld msg="Bienvenu dans votre magasin informatique"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
