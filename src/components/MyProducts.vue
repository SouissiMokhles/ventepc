<template>
  <div class="card text-center m-1">
    <div class="card-header">
      Nom de l'utilisateur
      <button class="btn btn-primary"></button>
    </div>
    <div class="card-body">
      <h5 class="card-title">Vos Produits</h5>
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
      <div class="col-4">
        <button class="btn btn-primary mx-auto"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProducts",
};
</script>
