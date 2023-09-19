<template>
    <body>
    <p class="productos">Tambien puede  interesarte <a href="#">Notebook HP 14-dq2024la 8 GB</a> - <a href="#">asus rog strix g15</a> - <a href="#">notebook dell</a></p>
    <div class="container seccion-clara">
        <div v-if="notebooks && notebooks[id]">
                    <div class="d-flex flex-row">
                        <div class="row">
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
                            <div class="info col-md-4">
                                    <h2>{{title}}</h2>
                                    <div class="rating"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></div>
                                        <h3>$ {{notebooks[id].notebooksTypes[selectedVariant].price}}</h3>
                                        <div class=" d-flex flex-row">
                                            <div
                                            class="circle"
                                            v-for="(variant,index) in notebooks[id].notebooksTypes"
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
                    </div>
                    <div class="divider bg-secondary"></div>
                    <div class="description">
                                <h3 class="subtitle">Informacion del producto</h3>
                                <p class="pinfo">{{notebooks[id].description}}</p>
                                <p class="pinfo">Para mas informacion del fabricante consulte <a :href="notebooks[id].factory_url" target="_blank" rel="noreferrer">aqui</a></p>
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
                                    <li v-for="(comentario,index) in comentarios" :key="index">{{comentarios[index]}}</li>
                                </ul>
                    </div>
                </div>
                <div v-else class="spinner-border align-items-center justify-content-center text-center" role="status">
                    <!-- Loading or error message -->
                </div>
    </div>
</body>
 </template>

<script>
import CallApi from '@/services/CallApi.js'
export default {
  name: 'NotebookDetail',
  props:['id'],

  data(){
    return {
        notebooks: [],
        selectedVariant : 0,
        pregunta: "",
        comentarios:[],
        mostrarAlerta:false,
    }
  },
  created(){
    CallApi.getNotebooks()
      .then(response => {
        this.notebooks = response.data
      })
      .catch(error => {
        console.log(error)
      })
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
                id : this.id,
                type : this.selectedVariant,
                title : this.notebooks[this.id].title,
                image: this.notebooks[this.id].image_url,
                ram : this.notebooks[this.id].notebooksTypes[this.selectedVariant].ramAmount,
                price : this.notebooks[this.id].notebooksTypes[this.selectedVariant].price
            }
            this.$store.commit('addToCart', notebook)
        }
    },
    computed:{
        title(){
            return this.notebooks[this.id].title + " " + this.notebooks[this.id].notebooksTypes[this.selectedVariant].ramAmount;
        }
    }
}
</script>

<style scoped>
body{
    background-color: #ededed;
    padding-bottom: 20px;
    min-height: 100vh;
}
.productos{
    padding-top: 20px;
    margin-left: 7%;
}
.seccion-clara{
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
}
.carousel-item img{
    object-fit: contain;
    height: 450px;
    min-width: 350px;
}
.info{
    margin-top: 10%;
}
.rating{
    color: #3483fa;
}
.pinfo{
    margin-left: 9%;
    margin-top: 2%;
}
.circle p{
    width: 50px;
    height: 50px;
    border: 2px solid #3483fa;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    margin-right: 10px;
}
.circle.active{
    background-color: #7cb0ff;
}
.buttons button{
    margin-right: 10px;
}
.divider{
    width: 100%;
    height: 1.5px;
    margin-top: 20px;
}
.description a{
    color: #3483fa;
}
.form,.comentarios{
    width: 80%;
    margin-top: 2%;
}
.form input{
    border-radius: 10px 0 0 10px;
    margin-left: 9%;
}
.form button{
    border-radius: 0px 10px 10px 0px;
}
.comentarios ul{
    list-style: none;
}
.comentarios li{
    margin-top: 10px;
    margin-left: 10px;
    color: #474747;
}
</style>