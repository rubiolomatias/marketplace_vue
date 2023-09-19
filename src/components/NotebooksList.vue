<template>
  <body>
    <h3 class="subtitle">Basado en tu última visita</h3>
    <div class="container">
        <div class="row">
          <div class="col-12 col-md-3" v-for="notebook in notebooks" :key="notebook.id">
            <router-link :to="{name:'NotebookDetail',params:{id: notebook.id}}">
              <div 
              v-for="(type,index) in notebook.notebooksTypes" 
              :key="type.ramAmount" 
              class="card align-items-center" 
              style="width: 16rem;">
                <img :src="notebook.image_url" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title title">{{getPrice(type)}}</h5>
                  <p class="card-text">{{getTitle(notebook, type, index)}}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
    </div>
  </body>
</template>

<script>
import CallApi from '@/services/CallApi.js'
export default {
  name: 'NotebooksList',
  data(){
    return{
      notebooks: []
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
  computed: {
      getTitle() {
        return (notebook, type) => {
          return `${notebook.title} ${type.ramAmount}`;
        };
      },
      getPrice() {
        return (type) => {
          return `$${type.price}`;
        };
      },
  }
}
</script>

<style scoped>
body{
    background-color: #ededed;
    padding-bottom: 20px;
}
h3{
    padding-top: 2%;
    margin-left: 9%;
}
a{
    text-decoration: none;
    color: #000;
}
.card{
    margin-top: 10%;
    min-height: 350px;
    margin-bottom: 10%;
}
.card img{
    margin-top: 10%;
    max-width: 70%;
    height: 170px;
}
.card .title{
    font-weight: bold;
}
</style>
