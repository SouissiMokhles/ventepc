<template>
  <div class="myProducts">
    <div class="card text-center m-1">
      <div class="card-header" v-for="name in userName" :key="name.key">
        {{ name.famName }} {{ name.name }}
        <div class="btn-group float-end">
          <button
            class="btn btn-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#config"
            v-on:click="
              getUserData(name.name, name.famName, name.email, name.key)
            "
          >
            configuration
          </button>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title float-start">Vos Produits</h5>
      </div>
      <div class="row ms-1">
        <div class="col-4" v-for="item in myProducts" :key="item.key">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-4">
                <img
                  :src="item.image"
                  class="img-fluid rounded-start"
                  alt="Image du produit"
                />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">
                    {{ item.description }}
                  </p>
                  <p class="card-text">
                    <small class="text-muted">{{ item.price }} DT</small>
                  </p>
                  <p class="card-text">
                    <small class="text-muted">{{ item.vendor }}</small>
                    <button
                      class="btn btn-danger"
                      v-on:click="deleteProduct(item.key)"
                    >
                      Supprimer
                    </button>
                    <button
                      class="btn btn-info ms-3"
                      data-bs-toggle="modal"
                      data-bs-target="#update"
                      v-on:click="
                        getData(
                          item.name,
                          item.description,
                          item.price,
                          item.image,
                          item.key
                        )
                      "
                    >
                      Mettre a jour
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 mb-3 align-self-center">
          <button
            class="btn btn-primary rounded-btn"
            data-bs-toggle="modal"
            data-bs-target="#add"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <div class="alert alert-success mt-3" role="alert" v-if="updateMessage">
      {{ updateMessage }}
    </div>
    <div class="alert alert-success mt-3" role="alert" v-if="updateMessage">
      {{ updateMessage }}
    </div>
    <div
      class="modal fade"
      id="add"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Ajouter un produit
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addProduct">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Nom du produit</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="product.name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Description</label
                >
                <textarea
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="product.description"
                  required
                />
                <div class="input-group mb-3">
                  <input
                    type="file"
                    accept=".jpg, .png"
                    class="form-control mt-3"
                    @change="previewImage"
                    required
                    id="inputGroupFile02"
                  />
                  <label class="input-group-text mt-3" for="inputGroupFile02"
                    >Upload</label
                  >
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Prix</label
                  >
                  <div class="col-4 offset-4">
                    <div class="input-group">
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="product.price"
                        required
                      />
                      <span class="input-group-text">DT</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary mt-3"
                data-bs-dismiss="modal"
              >
                Ajouter
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="update"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Modfier le produit
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="update">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Nom du produit</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  v-model="productData.name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Description</label
                >
                <textarea
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="productData.description"
                  required
                />
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Prix</label
                  >
                  <div class="col-4 offset-4">
                    <div class="input-group">
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        v-model="productData.price"
                        required
                      />
                      <span class="input-group-text">DT</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary mt-3"
                data-bs-dismiss="modal"
              >
                Ajouter
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="config"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Configuration du compte
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="updateUser">
              <div class="mb-3">
                <label for="Name" class="form-label">Prénom</label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  v-model="userData.name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="famName" class="form-label">Nom</label>
                <input
                  type="text"
                  class="form-control"
                  id="famName"
                  v-model="userData.famName"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  v-model="userData.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="psw" class="form-label">Mot de passe</label>
                <input
                  type="password"
                  class="form-control"
                  id="psw"
                  v-model="userData.psw"
                  required
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary mt-3"
                data-bs-dismiss="modal"
              >
                Modfier
              </button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../Firebase";
export default {
  name: "MyProducts",
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: 0,
        vendor: "",
        image: "",
        uid: localStorage.getItem("uid"),
      },
      productData: {
        name: "",
        description: "",
        price: 0,
        vendor: "",
        image: "",
        key: "",
      },
      userData: {
        name: "",
        famName: "",
        email: "",
        psw: "",
        key: "",
        uid: "",
      },
      uploadValue: 0,
      picture: null,
      imageData: null,
      imageName: "",

      updateMessage: "",
      ref: firebase.firestore().collection("products"),
      userRef: firebase.firestore().collection("users"),
      userAuth: firebase.auth().currentUser,
      successMessage: "",
      myProducts: [],
      userName: [],
      uid: localStorage.getItem("uid"),
    };
  },
  methods: {
    addProduct() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`images/${this.imageName}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            console.log("URL: ", url);
            this.product.image = url;
            this.ref
              .add(this.product)
              .then(() => {
                this.successMessage = "Produit jouté";
              })
              .then(() => {
                this.product.name = "";
                this.product.description = "";
                this.product.price = "";
                this.product.vendor = "";
                this.product.image = "";
              });
          });
        }
      );
    },
    getData(name, description, price, image, key) {
      this.productData.name = name;
      this.productData.description = description;
      this.productData.price = price;
      this.productData.image = image;
      this.productData.key = key;
    },
    getUserData(name, famName, email, uid, key) {
      this.userData.name = name;
      this.userData.famName = famName;
      this.userData.email = email;
      this.userData.uid = uid;
      this.userData.key = key;
    },
    updateUser() {
      this.userRef.doc(this.userData.key).update({
        name: this.userData.name,
        famName: this.userData.famName,
        email: this.userData.email,
      });
      this.userAuth.updateEmail(this.userData.email);
      this.userAuth.updatePassword(this.userData.psw);
    },
    update() {
      console.log("KEY: ", this.productData.key);
      this.ref
        .doc(this.productData.key)
        .update({
          name: this.productData.name,
          description: this.productData.description,
          price: this.productData.price,
          vendor: this.productData.vendor,
          image: this.productData.image,
        })
        .then(() => {
          this.updateMessage("Mis a jour");
        });
    },
    deleteProduct(key) {
      this.ref.doc(key).delete();
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      this.imageName = event.target.files[0].name;
    },
  },
  created() {
    this.userRef.onSnapshot((query) => {
      this.userName = [];
      query.forEach((doc) => {
        if (localStorage.getItem("uid") == doc.data().uid) {
          this.userName.push({
            key: doc.id,
            name: doc.data().name,
            famName: doc.data().famName,
            email: doc.data().email,
          });
        }
      });
    });
    this.ref.onSnapshot((query) => {
      this.myProducts = [];
      query.forEach((doc) => {
        if (localStorage.getItem("uid") == doc.data().uid) {
          this.myProducts.push({
            key: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            price: doc.data().price,
            vendor: doc.data().vendor,
            image: doc.data().image,
          });
        }
      });
    });
  },
};
</script>

<style>
.rounded-btn {
  border-radius: 100%;
}
</style>
