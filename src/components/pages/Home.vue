<template>
  <v-layout>
    <v-flex>
      <h1>Bebidas</h1>
      <span>Selecione os produtos para adicionar ao carrinho</span>

      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4" v-for="produto in produtos" :key="produto.id">
          <CardProduct
            :id="produto.id"
            :nome="produto.nome"
            :descricao="produto.descricao"
            :preco="produto.preco"
          />
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import CardProduct from "../CardProduct";

export default {
  name: "Home",

  data() {
    return {
      produtos: [
        {
          id: 0,
          nome: "Água Mineral",
          descricao: "Garrafinha de 500ml de água mineral",
          preco: 2.1
        },
        {
          id: 1,
          nome: "Água Mineral 2",
          descricao: "Garrafinha de 500ml de água mineral",
          preco: 3.0
        },
        {
          id: 2,
          nome: "Água Mineral 3",
          descricao: "Garrafinha de 500ml de água mineral",
          preco: 4.5
        },
        {
          id: 3,
          nome: "Água Mineral 4",
          descricao: "Garrafinha de 500ml de água mineral",
          preco: 2.5
        }
      ]
    };
  },

  components: {
    CardProduct
  }
};
</script>

<style scoped>
h1 {
  font-size: 40px;
}
</style>