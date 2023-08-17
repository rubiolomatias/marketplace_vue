const app = Vue.createApp({
  data(){
      return{
          cart: [],
          notebooks:[],
          notebookSelected:[]
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
    selectNotebook(notebook, type) {
      this.notebookSelected.push({notebook, type});
      this.saveSelectedNotebook();
    }
  },
  mounted(){
      fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products')
      .then(response => response.json())
      .then(data => {
        this.notebooks = data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
})