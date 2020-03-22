<template>
  <v-layout>
    <v-flex>
      <h1>{{nomeCategoria}}</h1>
      <span>Selecione os produtos para adicionar ao carrinho</span>

      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4" v-for="produto in produtos" :key="produto.id">
          <CardProduct
            :id="produto.id"
            :nome="produto.name"
            :descricao="produto.description"
            :preco="produto.price"
            :imagem="produto.image"
          />
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import CardProduct from "../CardProduct";
import { mapGetters } from "vuex";

export default {
  name: "Home",

  data() {
    return {};
  },

  components: {
    CardProduct
  },

  computed: {
    ...mapGetters({
      nomeCategoria: "get_categorySelected",
      produtos: "get_productsForCategory"
    })
  }
};
</script>

<style scoped>
h1 {
  font-size: 40px;
}
</style>