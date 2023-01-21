<template>
  <div class="allProducts">
    <h1>Touts les produits</h1>
    <div class="row">
      <div class="col-3 ms-3" v-for="item in products" :key="item.key">
        <div class="card" style="width: 18rem">
          <img :src="item.image" class="card-img-top" alt="product" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
              {{ item.description }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ item.price }}</li>
            <li class="list-group-item"></li>
          </ul>
          <div class="card-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../Firebase";
export default {
  name: "AllProducts",
  data() {
    return {
      products: [],
      ref: firebase.firestore().collection("products"),
    };
  },
  created() {

    this.ref.onSnapshot((query) => {
      this.products = [];
      query.forEach((doc) => {
        this.products.push({
          key: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          price: doc.data().price,
          vendor: doc.data().vondor,
          image: doc.data().image,
        });
      });
    });
  },
};
</script>
