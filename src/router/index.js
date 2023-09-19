import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotebookDetail from '../views/NotebookDetail.vue'
import CartProducts from '../views/CartProducts.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/notebook/:id',
    name: 'NotebookDetail',
    props: true,
    component: NotebookDetail
  },
  {
    path: '/cart/',
    name: 'CartProducts',
    props: true,
    component: CartProducts
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
