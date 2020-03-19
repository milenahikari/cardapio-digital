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
            :imagem="produto.imagem"
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
          preco: 2.0,
          imagem:
            "https://cdn.garciasupermercados.com.br/media/catalog/product/cache/1/image/1000x1000/17f82f742ffe127f42dca9de82fb58b1/_/g/_gua_mineral_sem_g_s_crystal_500ml.jpg"
        },
        {
          id: 1,
          nome: "Coca-Cola",
          descricao: "Lata de 250ml",
          preco: 3.0,
          imagem:
            "https://images.zonasul.com.br/imagem1000X1000/2018621_10944.jpg"
        },
        {
          id: 2,
          nome: "Guaraná",
          descricao: "Lata de 250 ml",
          preco: 4.5,
          imagem:
            "https://www.deliveryextra.com.br/img/uploads/1/226/619226.jpg?type=product"
        },
        {
          id: 3,
          nome: "Suco Natural de Laranja",
          descricao: "Copo de 500ml de suco natural",
          preco: 2.5,
          imagem:
            "https://www.fundecitrus.com.br/img/noticias/456-201708081808.png"
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