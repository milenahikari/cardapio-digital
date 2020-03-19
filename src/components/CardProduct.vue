<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
    @click="cardSelected(id, nome, descricao, preco, imagem)"
  >
    <v-list-item three-line>
      <v-img max-width="100" height="100" :src="`${imagem}`" />
      <v-list-item-content>
        <div class="mb-4">
          {{preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
          })}}
        </div>
        <v-list-item-title class="headline mb-1">{{nome}}</v-list-item-title>
        <v-list-item-subtitle>{{descricao}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["id", "preco", "nome", "descricao", "imagem"],

  methods: {
    cardSelected(idProduto, nome, descricao, preco, imagem) {
      if (this.carrinho.length > 0) {
        var indiceProduto = null;

        for (const [key, item] of this.carrinho.entries()) {
          if (item.idProduto == idProduto) {
            indiceProduto = key;
          }
        }

        if (indiceProduto == null) {
          const cart = {
            idProduto,
            quantidade: 1,
            nome,
            descricao,
            preco,
            imagem
          };

          this.setCart(cart);
        } else {
          this.carrinho[indiceProduto].quantidade += 1;
        }
      } else {
        const cart = {
          idProduto,
          quantidade: 1,
          nome,
          descricao,
          preco,
          imagem
        };

        this.setCart(cart);
      }
    },
    ...mapActions({
      setCart: "set_cart"
    })
  },

  computed: {
    ...mapGetters({
      carrinho: "get_cart"
    })
  }
};
</script>