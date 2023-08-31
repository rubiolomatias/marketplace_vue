app.component("cart-products",{
    props:{
        notebooks:{
            type:Array,
            required:true,
        },
        cart:{
            type:Array,
            required:true
        }
    },
    template:/*html*/
    `<div class="container">
        <div v-if="notebooks.length == 0" class="spinner-border align-items-center justify-content-center text-center " role="status">
       <!--Carga Pagina-->
        </div>
        <div v-else>
            <div class="row">
                <div v-if="cart.length > 0" class="col-md-8 seccion-clara d-flex flex-column">
                    <h5>Productos</h5>
                    <div class="border-bottom"></div>
                    <div v-for="(producto,index) in cart" :key="index">
                        <div class="producto">
                            <div class="row align-items-center">
                                <img :src="notebooks[producto.id].image_url" class="col-md-3">
                                <div class="col-md-6">
                                    <p>{{title(producto.id,producto.type)}}</p>
                                    <button type="button" class="btn btn-outline-danger" @click="eliminar(index)">Eliminar</button>
                                </div>
                                <p class="col-md-3 precio">{{price(producto.id,producto.type)}}</p>
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
    </div>`,
    computed:{
        title() {
            return (notebook, type) => {
              return `${this.notebooks[notebook].title} ${this.notebooks[notebook].notebooksTypes[type].ramAmount}`;
            };
        },
        price(){
            return (id,type) => {
                return `$${this.notebooks[id].notebooksTypes[type].price.toFixed(2)}`;
            }
        },
        totalPrice() {
            let total = 0;
            this.cart.forEach(producto => {
                const notebook = this.notebooks[producto.id];
                const price = notebook.notebooksTypes[producto.type].price;
                total += price;
            });
            return `$${total.toFixed(2)}`;
        }
    },
    methods:{
        eliminar(index) {
            this.cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },
    }
})