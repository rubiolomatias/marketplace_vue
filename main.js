const app = Vue.createApp({
  data(){
      let valorcart = JSON.parse(localStorage.getItem("cart"));
      return{
          cart:valorcart || [],
          notebooks:[],
          notebookSelected:[],
      }
  },
  computed: {
      getTitle() {
        return (notebook, type, index) => {
          return `${notebook.title} ${type.ramAmount}`;
        };
      },
      getPrice() {
        return (type) => {
          return `$${type.price}`;
        };
      },
  },
  methods:{
    selectNotebook(id, type) {
      id= id-1;
      localStorage.setItem("idNotebook", JSON.stringify({ id, type }));
    },
    updateCart(id){
      this.cart.push(id)
      localStorage.setItem("cart",JSON.stringify(this.cart));
    }
  },
  async created() {
    try {
      const response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products');
      const data = await response.json();
      this.notebooks = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
})