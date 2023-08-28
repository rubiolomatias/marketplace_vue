app.component("navbar",{
    props:{
        cart:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="./index.html"><img :src="image" alt=""></a>
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
                    <a class="nav-link active" aria-current="page" href="./carrito.html"><i class="bi bi-cart4"></i><span v-if="cart.length > 0">( {{cart.length}} )</span>
                    </a>
                </li>
                </ul>
                <form class="d-flex col-md-6" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar productos, marcas y más..." aria-label="Search">
                <button class="btn btn-primary" type="submit">Buscar</button>
                </form>
            </div>
        </div>
    </nav> `,
    data(){
        return{
            image:"https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo.png",
        }
    }
})