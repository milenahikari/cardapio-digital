<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    @click="cardSelected(id, nome, descricao, preco)"
  >
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <div class="mb-4">R$ {{preco}}</div>
        <v-list-item-title class="headline mb-1">{{nome}}</v-list-item-title>
        <v-list-item-subtitle>{{descricao}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["id", "preco", "nome", "descricao"],

  methods: {
    cardSelected(idProduto, nome, descricao, preco) {
      const cart = {
        idProduto,
        quantidade: 1,
        nome,
        descricao,
        preco
      };

      this.setCart(cart);
    },
    ...mapActions({
      setCart: "set_cart"
    })
  }
};
</script>