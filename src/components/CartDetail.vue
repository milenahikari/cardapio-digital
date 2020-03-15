<template>
  <v-container class="cd-container">
    <div class="cd-header">
      <v-icon>fas fa-shopping-cart</v-icon>
      <h1>Meu carrinho</h1>
    </div>
    <v-layout v-if="carrinho.length == 0" class="cd-empty-cart">
      <span>Ooops seu carrinho ainda está vazio...</span>
      <img src="/empty_cart.gif" />
    </v-layout>
    <v-layout v-else>
      <v-flex>
        <v-list rounded="rounded">
          <v-list-item v-for="produto in carrinho" :key="produto.id">
            <div class="cd-content-cart">
              <div class="cd-left-cart">
                <v-img max-width="100" height="100" src="https://picsum.photos/500/300?image=16" />
              </div>
              <div class="cd-right-cart">
                <div class="cd-quantity">
                  <v-icon @click="addOneProduct(produto.idProduto)">fas fa-plus-circle</v-icon>
                  <span>{{produto.quantidade}}</span>
                  <v-icon @click="removeOneProduct(produto.idProduto)">fas fa-minus-circle</v-icon>
                </div>
                <div class="cd-info">
                  <div class="cd-header-list">
                    <h3 class="cd-cart-title">{{produto.nome}}</h3>
                    <v-icon @click="removeProductCart(produto.idProduto)">fas fa-times</v-icon>
                  </div>
                  <div class="cd-price">
                    <h3>R$ {{produto.preco}}</h3>
                  </div>
                </div>
              </div>
            </div>
          </v-list-item>
          <div class="cd-price-total">
            <h2>Total</h2>
            <h2>R$ {{sumPrice}}</h2>
          </div>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartDetail",
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      carrinho: "get_cart"
    }),

    sumPrice() {
      if (this.carrinho.length === 1) return this.carrinho[0].preco;

      return this.carrinho.reduce(
        (valorTotal, valorAtual) => valorTotal.preco + valorAtual.preco
      );
    }
  },

  methods: {
    removeProductCart(idProduto) {
      for (const [key, item] of this.carrinho.entries()) {
        if (item.idProduto == idProduto) {
          this.carrinho.splice(key, 1);
        }
      }
    },

    addOneProduct(idProduto) {
      this.carrinho.forEach(item => {
        if (item.idProduto == idProduto) {
          item.quantidade += 1;
        }
      });
    },

    removeOneProduct(idProduto) {
      this.carrinho.forEach(item => {
        if (item.idProduto == idProduto && item.quantidade > 0) {
          item.quantidade -= 1;
        }
      });
    }
  }
};
</script>

<style scoped>
.cd-container {
  width: 100%;
  height: 100%;
}
.cd-empty-cart {
  display: flex;
  height: 60%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.cd-empty-cart span {
  margin-top: 30px;
  font-weight: bold;
}
.cd-empty-cart img {
  width: 80%;
}
.cd-header {
  display: flex;
  align-items: center;
}
.cd-header i {
  font-size: 30px;
  margin: 25px;
}
.cd-cart-title {
  text-align: center;
}
.cd-content-cart {
  width: 100%;
  display: flex;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 10px;
}
.cd-left-cart {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
.cd-right-cart {
  width: 70%;
  display: flex;
}
.cd-quantity {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.cd-info {
  width: 100%;
}
.cd-header-list {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  padding: 15px;
}
.cd-header-list button {
  position: absolute;
  right: 10px;
  top: 8px;
}
.cd-price {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.cd-price h3 {
  margin-top: 10px;
  margin-right: 10px;
}
.cd-price-total {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>