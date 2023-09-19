import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product)
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex(item => item.id === productId)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    },
    clearCart(state) {
      state.cart = []
    }
  },
  getters: {
    cartItemCount: state => state.cart.length
  }
})
