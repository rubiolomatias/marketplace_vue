<template>
    <body>
        <div class="container">
            <div class="row">
                    <div v-if="cart.length > 0" class="col-md-8 seccion-clara d-flex flex-column">
                        <h5>Productos</h5>
                        <div class="border-bottom"></div>
                        <div v-for="(producto,index) in cart" :key="index">
                            <div class="producto">
                                <div class="row align-items-center">
                                    <img :src="cart[index].image" class="col-md-3">
                                    <div class="col-md-6">
                                        <p>{{cart[index].title}}</p>
                                        <button type="button" class="btn btn-outline-danger" @click="removeFromCart(cart[index].id)">Eliminar</button>
                                    </div>
                                    <p class="col-md-3 precio">{{cart[index].price}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="col-md-8 seccion-clara d-flex flex-column">
                        <h5>Productos</h5>
                        <div class="border-bottom"></div>
                        <p class="pinfo">¡Empieza un carrito de compras!</p>
                    </div>
                    <div v-if="cart.length > 0"  class="col-md-3 seccion-clara resumen-compra">
                        <h5 class="pdetalle">Resumen de compra</h5>
                        <div class="border-bottom"></div>
                        <div class="d-flex flex-row justify-content-around">
                            <p>Productos({{cart.length}})</p>
                            <p>Total: {{totalPrice}}</p>
                        </div>
                    </div>
                </div>
        </div>
    </body>
</template>

<script>
export default {
  name: 'NotebooksList',
  methods: {
    removeFromCart(productId) {
      this.$store.commit('removeFromCart', productId)
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    totalPrice() {
        let total = 0;
        this.cart.forEach(producto => {
            const price = producto.price;
            total += price;
        });
        return `$${total.toFixed(2)}`;
        }
  },
}
</script>

<style scoped>
body{
    min-height: 100vh;
    background-color: #ededed;
}
.container{
    padding-top: 20px;
}
.border-bottom{
    margin-bottom: 10px;
}
.producto{
    margin-top: 10px;
}
</style>