export default {
  SET_CART(state, value) {
    state.cart = [...state.cart, value];
  },
}