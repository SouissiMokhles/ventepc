<template>
  <div class="myProducts">
    <div class="card text-center m-1">
      <div class="card-header">
        Nom de l'utilisateur
        <div class="btn-group float-end">
        <button class="btn btn-primary btn-sm">configuration</button>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title float-start">Vos Produits</h5>
      </div>
      <div class="row ms-1">
        <div class="col-4">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-4">
                <img class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 align-self-center">
          <button
            class="btn btn-primary rounded-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="staticBackdrop"
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
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Nom du produit</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Description</label
                >
                <textarea class="form-control" id="exampleInputPassword1" />
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
                      />
                      <span class="input-group-text">DT</span>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Ajouter</button>
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
export default {
  name: "MyProducts",
};
</script>

<style>
.rounded-btn {
  border-radius: 100%;
}
</style>
