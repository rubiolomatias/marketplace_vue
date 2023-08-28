app.component("display-product", {
    emits: ['add-to-cart'],
    props: {
        notebooks: {
            type: Array,
            required: true
        }
    },
    template: /*html*/ `
        <p>Tambien puede  interesarte <a href="#">Notebook HP 14-dq2024la 8 GB</a> - <a href="#">asus rog strix g15</a> - <a href="#">notebook dell</a></p>
        <div class="container seccion-clara">
            <div class="row">
                <div class="col-12">
                    <div v-if="notebooks.length == 0" class="spinner-border align-items-center justify-content-center text-center" role="status">
                    <!--Carga Pagina-->
                    </div>
                    <div v-else>
                        <div class="d-flex flex-row">
                            <div id="carouselExampleFade" class="carousel carousel-dark slide col-md-6">
                                <div class="carousel-inner">
                                    <div class="carousel-item active" >
                                    <img :src="notebooks[0].image_url" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img :src="notebooks[1].image_url" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img :src="notebooks[2].image_url" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                    <img :src="notebooks[3].image_url" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                            <div class="info col-md-6">
                                <h2>{{title}}</h2>
                                <div class="rating"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>
                                <h3>$ {{notebooks[id.id].notebooksTypes[selectedVariant].price}}</h3>
                                <div class=" d-flex flex-row">
                                    <div
                                    class="circle"
                                    v-for="(variant,index) in notebooks[id.id].notebooksTypes"
                                    :key="variant.id"
                                    @click="updateVariant(index)">
                                    <p>{{variant.ramAmount}}</p>
                                    </div>
                                </div>
                                <div class="buttons d-flex flex-row">
                                    <button type="button" class="btn btn-primary">Comprar Ahora</button>
                                    <button type="button" class="btn btn-secondary" @click="addToCart">Agregar al carrito</button>
                                </div> 
                            </div> 
                        </div>
                        <div class="divider bg-secondary"></div>
                        <div class="description">
                            <h3 class="subtitle">Informacion del producto</h3>
                            <p class="pinfo">{{notebooks[id.id].description}}</p>
                            <p class="pinfo">Para mas informacion del fabricante consulte <a :href="notebooks[id.id].factory_url" target="_blank" rel="noreferrer">aqui</a></p>
                        </div>
                        <div class="divider bg-secondary"></div>
                        <div class="form">
                            <form @submit.prevent="onSubmit">
                                <div class="mb-3">
                                    <h4><label for="pregunta" class="form-label">Buscá lo que querés saber</label></h4>
                                    <div class="d-flex flex-row">
                                        <input type="text" v-model="pregunta" class="form-control" id="pregunta" placeholder="Escribí una pregunta o palabra clave">
                                        <button type="submit" class="btn btn-primary"><i class="bi bi-search"></i></button>
                                    </div>
                                </div>
                            </form>
                            <div v-if="mostrarAlerta" class="alert alert-danger" role="alert">Ingrese una pregunta por favor!!!</div>
                        </div>
                        <div class="comentarios" v-if="comentarios.length > 0">
                            <h4>Comentarios</h4>
                            <ul>
                                <li v-for="(comentario,index) in comentarios">{{comentarios[index]}}</li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    `,
    data() {
        let valorid = JSON.parse(localStorage.getItem("idNotebook"));
        return {
            id: {...valorid},
            selectedVariant : 0,
            pregunta: "",
            comentarios:[],
            mostrarAlerta:false,
        };
    },
    methods:{
        updateVariant(index) {
            this.selectedVariant = index;
        },
        onSubmit(){
            if (this.pregunta === '') {
                this.mostrarAlerta = true;
            }else{
                this.comentarios.push(this.pregunta)
                this.mostrarAlerta = false;
                this.pregunta = "";
            }
        },
        addToCart(){
            let notebook = {
                id : this.id.id,
                type : this.selectedVariant
            }
            this.$emit('add-to-cart', notebook);
        }
    },
    computed:{
        title(){
            return this.notebooks[this.id.id].title + " " + this.notebooks[this.id.id].notebooksTypes[this.selectedVariant].ramAmount;
        }
    }
});

