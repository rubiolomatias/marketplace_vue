<template>
  <body>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link to="/"><img src="./assets/logo.png" alt=""></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                    </a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Notebooks</a></li>
                    <li><a class="dropdown-item" href="#">Vehiculos</a></li>
                    <li><a class="dropdown-item" href="#">Supermercado</a></li>
                    <li><a class="dropdown-item" href="#">Electrodomesticos</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                  <router-link :to="{name:'CartProducts'}">
                    <i class="bi bi-cart4"></i>
                    <span class="cantidad">( {{ cart.length }} )</span>
                  </router-link>
                </li>
              </ul>
              <form class="d-flex col-md-6" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar productos, marcas y más..." aria-label="Search">
                <button class="btn btn-primary" type="submit">Buscar</button>
              </form>
            </div>
        </div>
    </nav>
    <router-view/>
  </body>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart
    }
  }
}
</script>

<style>
body{
    background-color: #ededed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar{
    background-color: #fff159;
}
.navbar img{
    max-width: 200px;
}
.nav-item {
    display: flex;
    align-items: center;
}
.nav-item .bi,.nav-item .cantidad {
    margin-top: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    color: #000;
}
</style>
