<template>
  <v-navigation-drawer app>
    <v-list dense>
      <v-list-item>
        <v-list-item-content text-center>
          <v-list-item-title class="cd-title">
            <span>Categorias</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <div class="cd-category">
          <v-icon>fas fa-bread-slice</v-icon>
          <span>Entrada</span>
        </div>
      </v-list-item>
      <v-list-item>
        <div class="cd-category">
          <v-icon>fas fa-utensils</v-icon>
          <span>Prato Principal</span>
        </div>
      </v-list-item>
      <v-list-item>
        <div class="cd-category">
          <v-icon>fas fa-hamburger</v-icon>
          <span>Lanches</span>
        </div>
      </v-list-item>
      <v-list-item>
        <div class="cd-category">
          <v-icon>fas fa-glass-martini-alt</v-icon>
          <span>Bebidas</span>
        </div>
      </v-list-item>
      <v-list-item>
        <div class="cd-category">
          <v-icon>fas fa-ice-cream</v-icon>
          <span>Sobremesa</span>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Categories"
};
</script>

<style scoped>
.cd-title {
  text-align: center;
  margin: 10px;
}
.cd-title span {
  font-size: 20px;
}

.cd-category {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.cd-category span {
  margin-top: 10px;
  font-size: 14px;
}
</style>