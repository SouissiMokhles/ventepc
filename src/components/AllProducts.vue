<template>
  <div class="allProducts">
    <h4>Touts les produits</h4>
    <div class="row mt-3">
      <div class="col-3 ms-3" v-for="item in products" :key="item.key">
        <div class="card" style="width: 18rem">
          <img :src="item.image" class="card-img-top" alt="product" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">
             Description: {{ item.description }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Prix: {{ item.price }} DT</li>
            <li class="list-group-item">Contact du vendeur: {{ item.vendor }}</li>
          </ul>
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
      vendor: [],
      ref: firebase.firestore().collection("products"),
      vendorRef: firebase
        .firestore()
        .collection("users")
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
          vendor: doc.data().vendor,
          image: doc.data().image,
        });
      });
    });
  },
};
</script>
