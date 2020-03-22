import Vue from 'vue';
import Vuex from 'vuex';

import cart from './modules/cart/root';
import categorySelected from './modules/categorySelected/root';
import productsForCategory from './modules/productsForCategory/root';

// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { cart, categorySelected, productsForCategory },
  // plugins: [createPersistedState({
  //   paths: ['cart']
  // })],
})