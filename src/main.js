import Vue from 'vue'
import vuetify from './plugins/vuetify';
import Routes from './routes.js';

import App from './App.vue'
import store from './store/index';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: Routes,
  store
}).$mount('#app')
