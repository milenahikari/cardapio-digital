<template>
  <v-navigation-drawer app permanent color="#F1F1F1">
    <v-list>
      <v-list-item>
        <v-list-item-content text-center>
          <v-list-item-title class="cd-title">
            <span>Categorias</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="cd-list-item" v-for="(categoria) in categories" :key="categoria.id">
        <div class="cd-category" @click="categorySelected(categoria.id, categoria.name)">
          <v-icon>{{categoria.icon}}</v-icon>
          <span>{{categoria.name}}</span>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import api from "../services/api";
import { mapActions } from "vuex";

export default {
  name: "Categories",

  data() {
    return {
      categories: []
    };
  },

  mounted() {
    api.get("/category").then(res => (this.categories = res.data));
  },

  methods: {
    async categorySelected(idCategory, nameCategory) {
      this.setCategorySelected(nameCategory);

      if (Number.isInteger(idCategory) && idCategory > 0) {
        try {
          const response = await api.get(`/category/${idCategory}/product`);

          this.setProductsForCategory(response.data);
        } catch (e) {
          console.log(e);
        }
      }
    },

    ...mapActions({
      setProductsForCategory: "set_productsForCategory",
      setCategorySelected: "set_categorySelected"
    })
  }
};
</script>

<style scoped>
.cd-title {
  text-align: center;
  margin: 10px;
}
.cd-title span {
  font-size: 30px;
}

.cd-category {
  background: white;
  width: 100%;
  height: 140px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 15px;
}
.cd-category i {
  color: #232323;
  font-size: 40px;
}
.cd-category span {
  margin-top: 10px;
  font-size: 20px;
}
</style>