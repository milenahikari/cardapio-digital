<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar app clipped-right flat>
        <div class="cd-mr-15">
          <v-icon>fab fa-slack</v-icon>
        </div>
        <v-toolbar-title>Restaurante</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon class="cd-mr-20" @click="openCart">fas fa-shopping-cart</v-icon>
      </v-app-bar>

      <Categories />
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>

      <v-navigation-drawer v-model="right" fixed right temporary width="30%">
        <CartDetail />
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
import Categories from "./components/Categories";
import CartDetail from "./components/CartDetail";

import { mapGetters } from "vuex";

export default {
  name: "App",

  data: () => ({
    drawer: null,
    right: false
  }),

  components: {
    Categories,
    CartDetail
  },

  watch: {
    carrinho() {
      if (this.carrinho.length > 0) {
        this.right = !this.right;
      }
    }
  },

  methods: {
    openCart() {
      this.right = !this.right;
    }
  },

  computed: {
    ...mapGetters({
      carrinho: "get_cart"
    })
  }
};
</script>

<style>
.cd-mr-15 {
  margin-right: 15px;
}
.cd-mr-20 {
  margin-right: 20px;
}
</style>
